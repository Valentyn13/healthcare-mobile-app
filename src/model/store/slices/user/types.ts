export interface User {
    id: string;
    firstName: string;
    surname: string;
    avatar: string;
    plan: string;
}

export interface UserSchema {
    authData?: User;

    error?: string;
    isLoading: boolean;
}
