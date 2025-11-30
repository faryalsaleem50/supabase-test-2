import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://zgqgwgktyboaqfssdxma.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpncWd3Z2t0eWJvYXFmc3NkeG1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ0MjQ2NzcsImV4cCI6MjA4MDAwMDY3N30.EBFXLUsXES8VraDPSTChKFru-E2SrH0S0dPFmxTWVhQ";

export const supabase = createClient(supabaseUrl, supabaseKey);
