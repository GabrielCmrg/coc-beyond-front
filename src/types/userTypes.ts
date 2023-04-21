export interface UserView {
  id: number;
  email: string;
}

export interface UserCreationPost {
  email: string;
  password: string;
  confirmPassword: string;
}
