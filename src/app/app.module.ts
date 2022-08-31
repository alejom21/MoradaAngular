import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DefaultModule } from './UI/layouts/default/default.module';
import { FullwidthModule } from './UI/layouts/fullwidth/fullwidth.module';
import { UserGateWay } from './domain/models/User/gateway/user-gateway';
import { MoradaApiService } from './infraestructure/driven-adapter/service/morada/morada-api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PropertyGateway } from './domain/models/Property/gateway/property-gateway';
import { MoradaPropertyApiService } from './infraestructure/driven-adapter/service/morada-property/morada-property.service';
import { AuthInterceptor } from './infraestructure/helpers/authinterceptor';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    FullwidthModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi:true},
    {provide : UserGateWay, useClass : MoradaApiService},
    {provide: PropertyGateway, useClass: MoradaPropertyApiService }
  ],
  
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
