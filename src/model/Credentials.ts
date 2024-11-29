export type Credentials = {
  email: string
  password: string
}

export type RegisterCredentials = Credentials & {
  username: string
}

export type OAuth = {
  accessToken: string
  refreshToken: string
}
