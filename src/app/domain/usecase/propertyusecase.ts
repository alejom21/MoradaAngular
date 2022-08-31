import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PropertyGateway } from "../models/Property/gateway/property-gateway";
import { PropertiesResponse, Property, PropertyResponse } from "../models/Property/property";

@Injectable ({
    providedIn:'root'
})

export class PropertyUseCase {
    constructor(private _propertyGateway : PropertyGateway){}

    getProperties() : Observable<PropertiesResponse> {
        //TODO implementacion de la logica de negocio
        return this._propertyGateway.getProperties();
    }
    getPropertyDetail( id:string) : Observable<PropertyResponse> {
        //TODO implementacion de la logica de negocio
        return this._propertyGateway.getPropertyDetail(id);
    }
    createProperty( property:Property) : Observable<PropertyResponse> {
        //TODO implementacion de la logica de negocio
        return this._propertyGateway.createProperty(property);
    }
}