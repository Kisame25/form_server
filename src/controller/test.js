import supabase from "../../supabase.js"

export const create = async(req, res) => {
    const {data}  = req.body
    try{
        return res.status(200).json({data})
    }catch(err){
        return res.status(500).json(err)
    }
}

