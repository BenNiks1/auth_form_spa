export enum AuthStep {
  AUTH_FORM = '/',
  RESET_PASS = 'reset_pass',
  SIGN_UP_FORM = 'sign_up',
}

export type FormStepTypes =
  | AuthStep.AUTH_FORM
  | AuthStep.RESET_PASS
  | AuthStep.SIGN_UP_FORM

export const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/
