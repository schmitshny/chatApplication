import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import { User } from '../model/User';


export const verifyTokenAndGetUserId = (cookies?: string): string | null => {
  const jwtSecret = process.env.JWT_SECRET;

  if (!cookies) {
    console.error('Cookies are undefined');
    return null;
  }

  if (!jwtSecret) {
    console.error('JWT secret is undefined');
    return null;
  }

  const parsedCookies = cookie.parse(cookies);
  const token = parsedCookies.token;

  try {
    const decoded = jwt.verify(token, jwtSecret) as jwt.JwtPayload;
    return decoded.user.id;
  } catch (error) {
    console.error('Error verifying token: ', error);
    return null;
  }
};


export const createToken = (user: User, expiresIn: string = '48h'): string => {
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined');
    }
    const payload = {
        user: {
            id: user.id,
        },
    };

    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn,
    })
}