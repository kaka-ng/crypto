import * as Bcrypt from 'bcrypt'
import { encode } from './base64'

export async function hash (value: string, round: number | string = 12): Promise<string> {
  return await Bcrypt.hash(encode(value), round)
}

export async function compare (value: string, hashed: string): Promise<boolean> {
  return await Bcrypt.compare(encode(value), hashed)
}

export async function salt (round: number = 12): Promise<string> {
  return await Bcrypt.genSalt(round)
}
