import { createClient } from '@supabase/supabase-js';

// ATENÇÃO: Ação necessária!
// Cole suas próprias credenciais do Supabase abaixo.
// Você pode encontrá-las no painel do seu projeto no Supabase, em Configurações > API.

const supabaseUrl = 'COLE_SUA_URL_SUPABASE_AQUI';
const supabaseAnonKey = 'COLE_SUA_CHAVE_ANON_SUPABASE_AQUI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);