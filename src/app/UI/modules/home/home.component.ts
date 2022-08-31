
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertiesResponse } from 'src/app/domain/models/Property/property';
import { PropertyUseCase } from 'src/app/domain/usecase/propertyusecase';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  staticUrl = environment.STATIC_STORAGE

  /*changeComponent(url:string, data:any){
    this.sharingService.setData(data);
    this._router.navigate([url]);
  }*/

  irAdetalle(id: string){
    this._router.navigate(['default/property'], { queryParams:{id: id}});
  }

  constructor(private _propertyUseCase: PropertyUseCase,
              private _router: Router) { }
  response: any;
  properties!: PropertiesResponse;
  ngOnInit(): void {
    this.response = this._propertyUseCase.getProperties();
      this.response.subscribe(
        (data: PropertiesResponse) => {
          if (data) {
            this.properties = data
            console.log(this.properties);
          }
        }
      )
  }

/*getPropertyById(id: string): void {
  this._router.navigate(['/default/property', id])
}*/

}