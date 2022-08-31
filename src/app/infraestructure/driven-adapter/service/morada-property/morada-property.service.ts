import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertyGateway } from 'src/app/domain/models/Property/gateway/property-gateway';
import { PropertiesResponse, PropertyResponse, Property } from 'src/app/domain/models/Property/property';
import { GenericService } from 'src/app/infraestructure/helpers/generic.service';

@Injectable({
  providedIn: 'root'
})
export class MoradaPropertyApiService extends PropertyGateway {
  private token = localStorage.getItem('token');
  
  private _url = 'http://localhost:3001'
  constructor(private genericService : GenericService) { super();}

  getProperties(): Observable<PropertiesResponse> {
      return this.genericService.get<PropertiesResponse>(this._url,'properties',undefined)
   
  }
  getPropertyDetail(id: string): Observable<PropertyResponse>  {

    return this.genericService.get<PropertyResponse>(this._url,'properties',id)
  
  }
  createProperty(property: Property): Observable<PropertyResponse> {

   return this.genericService.post<PropertyResponse>(this._url,'properties',property)
   
  }
}