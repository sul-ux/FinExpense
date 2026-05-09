const fs = require('fs');
const path = require('path');
require('dotenv').config();

const envDirectory = path.join(__dirname, '../src/environments');

// Create the directory if it doesn't exist
if (!fs.existsSync(envDirectory)) {
  fs.mkdirSync(envDirectory, { recursive: true });
}

const targetPath = path.join(envDirectory, 'environment.ts');
const targetPathProd = path.join(envDirectory, 'environment.production.ts');

// Use environment variables (from process.env locally or Netlify CI)
const supabaseUrl = process.env.supabaseUrl || '';
const supabaseKey = process.env.supabaseKey || '';

const envConfigFile = `export const environment = {
  production: false,
  supabaseUrl: '${supabaseUrl}',
  supabaseKey: '${supabaseKey}'
};
`;

const envConfigFileProd = `export const environment = {
  production: true,
  supabaseUrl: '${supabaseUrl}',
  supabaseKey: '${supabaseKey}'
};
`;

console.log('Generating environment files...');

fs.writeFileSync(targetPath, envConfigFile);
fs.writeFileSync(targetPathProd, envConfigFileProd);

console.log(`Environment files generated at ${envDirectory}`);
