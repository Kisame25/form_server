import supabase from "../../supabase.js"

export const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const { data } = await supabase.auth.signInWithPassword({ email, password })
        return res.status(200).json(data)
    } catch (err) {
        return res.status(500).json(err)
    }
}

export const logout = async (req, res) => {
    try {
        const { err } = await supabase.auth.signOut()
        return res.status(201).json({ "message": "success" })
    } catch (err) {
        return res.status(500).json(err)
    }
}


export const getSession = async (req, res) => {
    try {
        const { data } = await supabase.auth.getSession()
        return res.status(200).json(data);
    } catch (error) {
        
        return res.status(500).json({ error: 'Internal server error' });
    }
}

export const getUser = async (req, res) => {
    try{
        const {data} = await supabase.auth.getUser()
        return res.status(200).json(data)
    }catch(err){
        return res.status(500).json({ error: 'Internal server error' });
    }
}

export const refreshUserSession = async() => {
    try{
        const {data} = await supabase.auth.refreshSession()
        return res.status(200).json(data)
    }catch(err){
        return res.status(500).json({ error: 'Internal server error' });
    }
}

export const resetPasswordForEmail = async (req, res) => {
    const {email,redirectTo} = req.body
    try{
        await supabase.auth.resetPasswordForEmail(email,{
            redirectTo
        })
        return res.status(200).json({"message":"success"})
    }catch(err){
        return res.status(500).json({ error: 'Internal server error' })
    }
}

export const updatePassword = async (req, res) => {
    const {new_password} = req.body
    try{
        const {data} = await supabase.auth.updateUser({
            password: new_password
        })
        return res.status(200).json(data)
    }catch(err){
        return res.status(500).json(err ||{"message":"Failed to update password"})
    }
    

}