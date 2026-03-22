const fs = require("fs");
const path = require("path");
const { Client } = require("pg");

function readEnvFile(envPath) {
  return Object.fromEntries(
    fs
      .readFileSync(envPath, "utf8")
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("#"))
      .map((line) => {
        const equalsIndex = line.indexOf("=");
        return [line.slice(0, equalsIndex), line.slice(equalsIndex + 1)];
      })
  );
}

async function main() {
  const root = path.resolve(__dirname, "..");
  const env = readEnvFile(path.join(root, ".env"));
  const migrationSql = fs.readFileSync(
    path.join(root, "supabase/migrations/20260322_create_contact_inquiries.sql"),
    "utf8"
  );

  const client = new Client({
    connectionString: env.SUPABASE_DB_URL,
    ssl: { rejectUnauthorized: false },
  });

  await client.connect();
  await client.query(migrationSql);

  const columns = await client.query(`
    select column_name, data_type, is_nullable
    from information_schema.columns
    where table_schema = 'public' and table_name = 'contact_inquiries'
    order by ordinal_position;
  `);

  const policies = await client.query(`
    select policyname, cmd, roles::text
    from pg_policies
    where schemaname = 'public' and tablename = 'contact_inquiries'
    order by policyname;
  `);

  console.log(
    JSON.stringify(
      {
        columns: columns.rows,
        policies: policies.rows,
      },
      null,
      2
    )
  );

  await client.end();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
