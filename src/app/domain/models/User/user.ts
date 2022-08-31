import { UserResgistered } from "./userregitered";

export class User {
    name!: string;
    documentType! : string;
    document! : string;
    email! : string
    password! : string;
    phone! : string;
    role! : number;
}

export class UserResponse {
    user! : UserResgistered;
}