import { createClient } from '@supabase/supabase-js';

// TODO: Insira suas credenciais do Supabase aqui.
const supabaseUrl = 'https://vizmsoqabwwperqrpvff.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpem1zb3FhYnd3cGVycXJwdmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1MDE2NTQsImV4cCI6MjA3ODA3NzY1NH0.TO7-yCeLri74jKahHJwzakNJKDLT49RwmDrws8V4o5U';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);