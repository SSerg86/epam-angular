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
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  currancy: string;
}
