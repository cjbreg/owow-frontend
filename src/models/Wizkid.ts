export type Wizkid = {
  id?: string;
  name: string;
  role: Role | null;
  email: string;
  picture: string;
  phoneNumber?: number | null;
};

export enum Role {
  BOSS = 'boss',
  DEVELOPER = 'developer',
  DESIGNER = 'designer',
  ITERN = 'intern'
}
