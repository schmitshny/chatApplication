import { Request, Response } from 'express';
import { UserAlreadyExistsError } from '../domain/user/errors/UserAlreadyExistsError';
import AuthService from '../domain/user/service/AuthService';
import { ComparePasswordError, UserNotFoundError } from '../domain/user/errors';
import { createToken } from '../domain/user/service/TokenService';
import { InvalidTokenError } from '../domain/user/errors/InvalidTokenError';

export class AuthController {
  static async register(req: Request, res: Response) {
    try {
      const { email, password, name, lastName } = req.body;
      const user = await AuthService.registerUser({
        email,
        password,
        name,
        lastName,
      });

      const token = createToken(user);
      const { id } = user;
      res.cookie('token', token, { httpOnly: true, domain: '.ondigitalocean.app' });
      return res.status(201).json({ name, lastName, email, id });
    } catch (error) {
      console.log(error);
      if (error instanceof UserAlreadyExistsError) {
        return res.status(409).send({ message: error.message });
      } else {
        return res.status(500).send({ message: 'Something went wrong', error });
      }
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const user = await AuthService.authenticateUser({ email, password });
      const { name, lastName, id, avatarImg } = user;
      const token = createToken(user);
      res.cookie('token', token, { httpOnly: true, domain: '.ondigitalocean.app' });
      return res.status(200).json({ name, lastName, id, avatarImg });
    } catch (error) {
      console.log(error);
      if (error instanceof UserNotFoundError) {
        return res.status(404).send({ message: error.message });
      } else if (error instanceof ComparePasswordError) {
        return res.status(400).send({ message: error.message });
      } else {
        console.log(error);
        return res.status(500).send({ message: 'Something went wrong', error });
      }
    }
  }

  static async sendResetPasswordEmail(req: Request, res: Response) {
    try {
      const { email } = req.body;
      await AuthService.sendResetPasswordEmail(email);
      return res.status(200).send({ message: 'Email sent' });
    } catch (error) {
      if (error instanceof UserNotFoundError) {
        return res.status(404).send({ message: error.message });
      } else {
        return res.status(500).send({ message: 'Something went wrong', error });
      }
    }
  }

  static async resetPassword(req: Request, res: Response) {
    try {
      const { token, password } = req.body;
      await AuthService.resetUserPassword(token, password);
      return res
        .status(200)
        .send({ message: 'Password has been reset successfully' });
    } catch (error) {
      console.log(error);
      if (error instanceof UserNotFoundError) {
        return res.status(404).send({ message: error.message });
      } else if (error instanceof InvalidTokenError) {
        return res.status(400).send({ message: error.message });
      } else {
        return res.status(500).send({ message: 'Something went wrong', error });
      }
    }
  }
}
