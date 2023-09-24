import { hash, compare } from 'bcryptjs';

/**
 * @param {string} password
 * @returns {Promise<string>}
 */
export async function hasPassword(password) {
  const hashedPassword = await hash(password, 12);

  return hashedPassword;
}

/**
 * @param {string} password
 * @param {string} userPassword
 * @returns {Promise<boolean>}
 */
export async function verifyPassword(password, hashedPassword) {
  const isValid = await compare(password, hashedPassword);

  return isValid;
}
