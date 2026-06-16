#!/usr/bin/env node
// Genera l'hash della password admin da incollare in Vercel → Env Vars
// Uso: node scripts/hashPassword.mjs "la-tua-password"

import { scrypt, randomBytes } from 'crypto'
import { promisify } from 'util'

const scryptAsync = promisify(scrypt)

const password = process.argv[2]

if (!password) {
  console.error('\n❌ Errore: specifica la password come argomento.')
  console.error('   Uso: node scripts/hashPassword.mjs "la-tua-password"\n')
  process.exit(1)
}

if (password.length < 12) {
  console.error('\n⚠️  Attenzione: usa una password di almeno 12 caratteri.\n')
}

const salt = randomBytes(16).toString('hex')
const derived = await scryptAsync(password, salt, 64)
const hash = `${salt}:${derived.toString('hex')}`

console.log('\n✅ Hash generato. Copia questa riga in Vercel → Settings → Environment Variables:\n')
console.log(`ADMIN_PASSWORD_HASH=${hash}`)
console.log('\n⚠️  Non aggiungere ADMIN_PASSWORD nel .env — solo ADMIN_PASSWORD_HASH è necessario.\n')
