export interface UserDTO {
  id: number;
  name: string;
  lastName: string;
  avatarImg: string;
}

export interface ICreateUser {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

export interface IAuthenticateUser {
  email: string;
  password: string;
}
