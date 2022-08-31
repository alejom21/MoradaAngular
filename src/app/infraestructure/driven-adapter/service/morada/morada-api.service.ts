import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserGateWay } from 'src/app/domain/models/User/gateway/user-gateway';
import { Token } from 'src/app/domain/models/User/token';
import { User, UserResponse } from 'src/app/domain/models/User/user';
import { GenericService } from 'src/app/infraestructure/helpers/generic.service';

@Injectable({
  providedIn: 'root'
})
export class MoradaApiService extends UserGateWay {
  
  private _url = 'http://localhost:3001'
  constructor(private genericService : GenericService) { 
    super();
  }

  signup(user: User): Observable<UserResponse> {
    return this.genericService.post<User>(this._url,'users/signup',user)
  }

  login(email: string, password: string): Observable<Token> {
    return this.genericService.post<Token>(this._url, 'users/login',{email,password})
  }
}
