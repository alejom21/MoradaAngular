import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserUseCase } from 'src/app/domain/usecase/userusecase';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  response: any;
  loginForm!: FormGroup;
  formvalid:Boolean = false;
  usuario: string = "mejia@gmail.com"
  password: string = "12345678"
  public validationMessages = {
    email: [
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'pattern', message: 'Solo se permite emails' }

    ],
    password: [
      {type:'required', message:'Este campo es requerido'},
      {type:'minLength', message:'Este campo debe tener minimo 8 caracteres'},
    ]
  }
  constructor(
    private formBuilder: FormBuilder, 
    private router : Router,
    private http: HttpClient,
    private _userUseCase: UserUseCase
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
        ]

      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ]
    })
  }
  public get f() {
    return this.loginForm.controls
    
  }

  login() {
    
    if (this.loginForm.valid) {
      var email = this.loginForm.controls['email'].value;
      var password = this.loginForm.controls['password'].value;

      //Mockup de servicio login
      this.response = this._userUseCase.login(email,password);
      this.response.subscribe((data: any) => {
        if (data) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('expiration', data.expiration);
          this.router.navigate(['default/home']); 
          return;
        } 
        this.fireSuccessSwal('Error', email + ' No es un usuario autorizado', 'error', 'bad')
        return; 
      });
      
    //this.http.get<any>('https://login.free.beeceptor.com/login').subscribe(data => {     
    //});
    }
    else{
      this.fireSuccessSwal('Error', ' Login fallido, verifique los campos', 'error', 'bad')

    }

  }

  fireSuccessSwal(title : string, text : string, 
    icon: string, confirmButton : string)
  {
    switch (icon) {
      case 'success':
        Swal.fire({
          title: title,
          text: text,
          icon: 'success',
          confirmButtonText: confirmButton
        });
        break;
        case 'error':
          Swal.fire({
          title: title,
          text: text,
          icon: 'error',
          confirmButtonText: confirmButton
        });
        break;
    
      default:
        break;
    }
    
  }

}
