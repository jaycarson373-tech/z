import { createClient } from "@supabase/supabase-js";
import { seededTransmissions } from "../lib/transmissions";

const supabaseUrl = process.env.SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  throw new Error("Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY before running the seed script.");
}

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: { persistSession: false }
});

async function main() {
  const rows = seededTransmissions
    .slice()
    .reverse()
    .map(({ created_at, title, body, tag }) => ({ created_at, title, body, tag }));

  const { error } = await supabase.from("transmissions").insert(rows);

  if (error) {
    throw error;
  }

  console.log(`Seeded ${rows.length} transmissions.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
