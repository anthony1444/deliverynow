export interface AuthResponse {
    token: string;
    user: User;
  }
  
  export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string | null;
    createdAt: string;
    lastAccessedAt: string | null;
  }
  