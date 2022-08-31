import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PropertyResponse } from 'src/app/domain/models/Property/property';
import { MoradaPropertyApiService } from 'src/app/infraestructure/driven-adapter/service/morada-property/morada-property.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  staticUrl = environment.STATIC_STORAGE
  constructor( private _route: ActivatedRoute,
    private _router: Router,
    private _moradaPropertyApiService: MoradaPropertyApiService) { }


    property!: PropertyResponse;
    response: any;
  ngOnInit(): void {
    this._route.queryParamMap.subscribe(
      (params) => {
        var propertyid=params.get('id');
        if (propertyid) {
        this.response = this._moradaPropertyApiService.getPropertyDetail(propertyid);
        this.response.subscribe(
          (data: PropertyResponse) => {
            if (data) {
              this.property = data
              console.log(this.property)
            }
          }
        );
      }
      else{
        this._router.navigate(['/default/home'])
      }
    
    })
  }

}
