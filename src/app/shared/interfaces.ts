export interface User {
  email: string;
  password?: string;
  returnSecureToken?: boolean;
  name?: string;
  age?: string;
}

export interface FbAuthResponse {
  idToken: string;
  expiresIn: string;
}

export interface Game {
  id?: string;
  name: string;
  price: number;
  description: string;
  image: string;
  currancy: string;
  date?: Date;
}

export interface FbCreateResponse {
  name: string;
}

export interface Friend {
  name: string;
  isFriend: boolean;
  id: string;
}
