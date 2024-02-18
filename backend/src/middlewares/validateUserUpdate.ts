import { z } from 'zod';
import { NextFunction, Request, Response } from 'express';

const userUpdateSchema = z.object({
  name: z.string().min(2).optional(),
  lastName: z.string().min(2).optional(),
  password: z.string().min(8).optional(),
});

export const validateUserUpdate = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    userUpdateSchema.parse(req.body);
    next();
  } catch (error) {
    return res.status(400).send({ message: 'Invalid request data', error });
  }
};
