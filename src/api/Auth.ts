import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/helpers/constant'
import { CreateUser, Credentials } from 'model'
import request from '../helpers/request'

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
export const login = (data: Credentials) => {
  // mock jwt
  localStorage.setItem('access_token', ACCESS_TOKEN)
  localStorage.setItem('refresh_token', REFRESH_TOKEN)

  // return  request({ method: 'POST', url: '/login', data })

  return ACCESS_TOKEN
}

export const signup = (data: CreateUser) =>
  request({ method: 'POST', url: '/signup', data })

export const resetPass = (email: string) =>
  request({ method: 'POST', url: '/resetPass', data: { email } })
