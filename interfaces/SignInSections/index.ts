export interface signInForm{
    email:string;
    password:string;

}

export interface loginProps{
    data:signInForm;
}

export interface userCookie{
    id: string;
    username: string;
    email: string;
    phoneNumber: string;
    avatar: string;
}

export interface playerCookie{
    player:userCookie;
}

export interface functionProps{
    // eslint-disable-next-line no-unused-vars
    callbackFromParent:(data:signInForm)=>void
}
