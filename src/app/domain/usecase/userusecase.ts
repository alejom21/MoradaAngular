import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserGateWay } from "../models/User/gateway/user-gateway";
import { Token } from "../models/User/token";
import { User, UserResponse } from "../models/User/user";

@Injectable ({
    providedIn:'root'
})

export class UserUseCase {
    constructor(private _userGateway : UserGateWay){}

    /*signup(user : User) : string {
        // TODO implementacion de la logica de negocio
        var UserResgistered = this._userGateway.signup(user).subscribe((data) => {
            if (data.role == 2) {
                return data.name;
            }
            return data.document
        })
        return "Usuario no encontrado"
    }*/

    signup(user : User) : Observable<UserResponse> {
        // TODO implementacion de la logica de negocio
        return this._userGateway.signup(user);
    }
    login(email : string, password : string) : Observable<Token> {
        return this._userGateway.login(email,password);
    }
}