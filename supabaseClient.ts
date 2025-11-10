import { createClient } from '@supabase/supabase-js';

// ATENÇÃO: Cole suas credenciais REAIS do Supabase aqui.
export const supabaseUrl = 'https://vizmsoqabwwperqrpvff.supabase.co';
export const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpem1zb3FhYnd3cGVycXJwdmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1MDE2NTQsImV4cCI6MjA3ODA3NzY1NH0.TO7-yCeLri74jKahHJwzakNJKDLT49RwmDrws8V4o5U';

// Se as linhas acima ainda contiverem os textos de exemplo, a aplicação não funcionará.
if (supabaseUrl.includes('https://vizmsoqabwwperqrpvff.supabase.co') || supabaseAnonKey.includes('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpem1zb3FhYnd3cGVycXJwdmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1MDE2NTQsImV4cCI6MjA3ODA3NzY1NH0.TO7-yCeLri74jKahHJwzakNJKDLT49RwmDrws8V4o5U')) {
  throw new Error("As credenciais do Supabase não foram configuradas. Por favor, edite o arquivo services/supabaseClient.ts no GitHub.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
