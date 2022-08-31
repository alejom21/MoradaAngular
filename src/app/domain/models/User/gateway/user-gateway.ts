import { Observable } from "rxjs";
import { Token } from "../token";
import { User, UserResponse } from "../user";

export abstract class UserGateWay {
    abstract signup(user : User) : Observable<UserResponse>;
    abstract login(email : string, password : string) : Observable<Token>;
}