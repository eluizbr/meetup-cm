export interface App {
  name: string;
  url: string;
}

export interface Data {
  isActive: string;
  email: string;
  username: string;
  name: string;
  _id: string;
  isAccept: string;
  needChangePassword: string;
  apps: App[];
}

export interface User {
  token: string;
  data: Data;
}
