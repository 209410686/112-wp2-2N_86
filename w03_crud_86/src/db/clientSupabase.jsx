import { createClient } from '@supabase/supabase-js';
export const supabase = createClient(
  'https://etbxivzwzvhxmqxxvrwa.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0Ynhpdnp3enZoeG1xeHh2cndhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk4MDU3NzMsImV4cCI6MjAyNTM4MTc3M30.n0NcPrNg7wkdjFbEQB0jBY6_2nSjkRQ5M_vhYynkYt4'
);
