const SUPABASE_URL = 'https://agyutucvgxjlkhiwcbon.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFneXV0dWN2Z3hqbGtoaXdjYm9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQyMzg2NDcsImV4cCI6MTk4OTgxNDY0N30.BzK5Q5-MFu_4cAlsgE56qseE8UABfriLz24WrqUhsPY';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getTeams() {
    const { data, error } = await client.from('pac_12_football_teams').select('*');
    return data;
}

export async function getTeam(id) {
    const { data, error } = await client
        .from('pac_12_football_teams')
        .select(`*, state (name)`)
        .eq('id', id)
        .single();
    return data;
}
