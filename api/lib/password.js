// Hashing password con Node.js crypto built-in (scrypt)
// Zero dipendenze esterne, FIPS compliant, sicuro quanto bcrypt
import { scrypt, timingSafeEqual, randomBytes } from 'crypto'
import { promisify } from 'util'

const scryptAsync = promisify(scrypt)
const KEY_LEN = 64

export async function hashPassword(password) {
  const salt = randomBytes(16).toString('hex')
  const derived = await scryptAsync(password, salt, KEY_LEN)
  return `${salt}:${derived.toString('hex')}`
}

export async function verifyPassword(password, hash) {
  if (!hash?.includes(':')) return false
  const [salt, storedKey] = hash.split(':')
  try {
    const derived = await scryptAsync(password, salt, KEY_LEN)
    const storedBuf = Buffer.from(storedKey, 'hex')
    if (derived.length !== storedBuf.length) return false
    return timingSafeEqual(derived, storedBuf)
  } catch {
    return false
  }
}
