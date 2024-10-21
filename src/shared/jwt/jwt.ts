import { parseJwt } from './parseJwt'

export const isTokenExpired = (token: string) => {
  const decoded = parseJwt(token)
  const currentTime = Date.now() / 1000
  return decoded.exp < currentTime
}
