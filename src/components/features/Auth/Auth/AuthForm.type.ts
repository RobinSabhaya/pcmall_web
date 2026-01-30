export type mode = 'sign-in' | 'sign-up';

export interface AuthFormProps {
  mode: mode;
}

export interface FormValue {
  email: string;
  password: string;
  first_name?: string;
  confirm_password?: string;
}
