import { Observable } from "rxjs";
import { PropertiesResponse, Property, PropertyResponse } from "../property";

export abstract class PropertyGateway {
    abstract getProperties() : Observable<PropertiesResponse>;
    abstract getPropertyDetail(id : string) : Observable<PropertyResponse>;
    abstract createProperty(property : Property) : Observable<PropertyResponse>;
}