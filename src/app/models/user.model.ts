export interface User {
  id: string,
  email: string,
  password: string,
  name: string,
  role: 'customer' | 'admin'
}

export type createUserDTO = Omit<User, 'id'>

export interface Credentials {
  email: string,
  password: string
}

export interface Login {
  access_token: string
}
