export type Wizkid = {
  id: string;
  name: string;
  role: Role;
  email: string;
  picture: string;
  phoneNumber?: number;
};

export enum Role {
  BOSS = 'boss',
  DEVELOPER = 'developer',
  DESIGNER = 'designer',
  ITERN = 'intern'
}
