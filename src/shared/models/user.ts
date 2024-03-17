export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
}

export class User implements IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    avatar: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.avatar = avatar;
  }
}
