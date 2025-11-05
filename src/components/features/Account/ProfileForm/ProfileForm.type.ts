export interface ProfileData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface FormValue {
  first_name?: string;
  last_name?: string;
  email?: string;
  profile_picture?: string;
}
