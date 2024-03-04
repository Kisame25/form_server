import { createClient } from '@supabase/supabase-js';


const supabaseUrl = 'https://sinispdbpxvjqhbwgyrp.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpbmlzcGRicHh2anFoYndneXJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0NDk0MDksImV4cCI6MjAyNTAyNTQwOX0.RLFvPxkZ9my3kgTKL3LNtHuE9axU3X3m48RkW0hnsHc'; // Replace with your Supabase anon key
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase