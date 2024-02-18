import jwt, { VerifyErrors } from 'jsonwebtoken';
import { Request as ExpressRequest, Response, NextFunction } from 'express';

interface UserPayload {
  id: number;
  email: string;
  iat: number;
  exp: number;
}

interface Request extends ExpressRequest {
  user?: UserPayload;
}

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).send('Unauthorized: No token provided');
  }

  jwt.verify(
    token,
    process.env.JWT_SECRET || '',
    (err: VerifyErrors | null, decoded: any) => {
      if (err) {
        return res.status(401).send('Unauthorized: Invalid token');
      }

      req.user = decoded;
      next();
    },
  );
};
