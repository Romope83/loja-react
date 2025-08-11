import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://judzhnrcdqulpewfpldu.supabase.co'; // Substitua pela sua URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1ZHpobnJjZHF1bHBld2ZwbGR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ5NTAwMjUsImV4cCI6MjA3MDUyNjAyNX0.nrwO4mxleVflHE-75mRKacZ0xEfIZ22i-NIYj3xp0KY'; // Substitua pela sua chave

export const supabase = createClient(supabaseUrl, supabaseKey);