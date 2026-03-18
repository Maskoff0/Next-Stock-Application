const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const envPath = path.resolve(process.cwd(), '.env');
let env = {};
try {
  const content = fs.readFileSync(envPath, 'utf8');
  content.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const [key, ...rest] = trimmed.split('=');
    env[key.trim()] = rest.join('=').trim();
  });
  process.env = { ...process.env, ...env };
} catch (e) {
  console.error('Could not read .env:', e.message);
  process.exit(1);
}

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error('MONGODB_URI is not set after parsing .env');
  process.exit(1);
}

console.log('MONGODB_URI found, attempting mongoose.connect...');

mongoose
  .connect(uri, { bufferCommands: false })
  .then(() => {
    console.log('✅ Connected to MongoDB');
    return mongoose.disconnect();
  })
  .then(() => {
    console.log('✅ Disconnected cleanly');
    process.exit(0);
  })
  .catch((err) => {
    console.error('❌ Connection failed:', err.message);
    process.exit(1);
  });
