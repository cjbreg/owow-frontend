export type Wizkid = {
  id: string;
  name: string;
  role: Role;
  email: string;
  picture: any;
  phoneNumber?: number;
};

export enum Role {
  BOSS = 'role',
  DEVELOPER = 'developer',
  DESIGNER = 'designer',
  ITERN = 'intern'
}
