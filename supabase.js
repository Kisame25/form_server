import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv'
dotenv.config()

const supabaseUrl = process.env.SUPABASE_URL // Replace with your Supabase URL
const supabaseKey = process.env.SUPABASE_KEY // Replace with your Supabase anon key
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase