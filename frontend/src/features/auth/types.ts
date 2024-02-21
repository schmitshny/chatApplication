import { z } from 'zod';

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  avatarImg: z.string().optional(),
  userStatus: z.string().optional(),
  lastSeen: z.date().optional(),
});

export const LoginDataSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const RegisterDataSchema = UserSchema.extend({
  password: z.string(),
  confirmPassword: z.string().refine(
    function (this: { password: string }, value: string) {
      return value === this.password;
    },
    {
      message: "Password and confirm password don't match",
    },
  ),
});

export type User = z.infer<typeof UserSchema>;
export type LoginData = z.infer<typeof LoginDataSchema>;
export type RegisterData = z.infer<typeof RegisterDataSchema>;
