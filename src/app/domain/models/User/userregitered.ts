import { User } from "./user";

export class UserResgistered extends User {
    
    _id! : string;
    createAt! : Date;
    updateAt! : Date;
}