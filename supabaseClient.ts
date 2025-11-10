import { createClient } from '@supabase/supabase-js';

// ATENÇÃO: Cole suas credenciais REAIS e FINAIS do Supabase aqui.
const supabaseUrl = 'https://vizmsoqabwwperqrpvff.supabase.co';
const supabaseAnonKey = 'const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpem1zb3FhYnd3cGVycXJwdmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1MDE2NTQsImV4cCI6MjA3ODA3NzY1NH0.TO7-yCeLri74jKahHJwzakNJKDLT49RwmDrws8V4o5U';';

/**
 * Cria e retorna o cliente Supabase.
 * A aplicação chamará esta função apenas quando precisar interagir com o banco de dados.
 * Se as chaves estiverem incorretas, o erro virá diretamente da biblioteca Supabase,
 * o que é mais claro para depuração.
 */
export const getSupabaseClient = () => {
    return createClient(supabaseUrl, supabaseAnonKey);
};
