import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './default.component';
import { ContactComponent } from '../../modules/contact/contact.component';
import { HomeComponent } from '../../modules/home/home.component';
import { SharedModule } from '../../shared/shared.module';
import { PropertyComponent } from 'src/app/modules/property/property.component';



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    ContactComponent,
    PropertyComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DefaultModule { }
