import { check, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const validateUser = [
  check('email').isEmail().withMessage('Email is not valid'),
  check('password')
    .isLength({ min: 5 })
    .withMessage('Password must be at least 5 chars long'),
  check('name').not().isEmpty().withMessage('Name is required'),
  check('lastName').not().isEmpty().withMessage('Last name is required'),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
