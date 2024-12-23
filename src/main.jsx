import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://your-supabase-project.supabase.co'
const supabaseKey = 'your-supabase-anon-key'
const supabase = createClient(supabaseUrl, supabaseKey)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App supabase={supabase} />
  </React.StrictMode>
)
