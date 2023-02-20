export interface Credentials {
  email: string
  pass: string
}

export interface CreateUser {
  email: string
  fullName: string
  pass: string
  repeatPass: string
}
