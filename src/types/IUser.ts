export interface IUser {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
    friends: IUser[];
    friendRequestsSent: IUser[];
    friendRequestsReceived: IUser[];
    isActive: boolean;
    lastActive: string;
}

export interface IRegisterForm {
    firstName: string;
    lastName: string;
    sex: string;
    dateOfBirth: string;
    nickName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface ILoginForm {
    email: string;
    password: string;
}