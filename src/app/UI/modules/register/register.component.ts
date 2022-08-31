import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User, UserResponse } from 'src/app/domain/models/User/user';
import { UserResgistered } from 'src/app/domain/models/User/userregitered';
import { UserUseCase } from 'src/app/domain/usecase/userusecase';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  signupForm!: FormGroup;
  response : any;
  user! : UserResgistered;
  constructor(private _userUseCase: UserUseCase, private formBuilder: FormBuilder,) { }
  public validationMessages = {
    name: [
      { type: 'required', message: 'Este campo es requerido' },
    ],
    documentType: [
      { type: 'required', message: 'Este campo es requerido' },
    ],
    document: [
      { type: 'required', message: 'Este campo es requerido' },
    ],
    phone: [
      { type: 'required', message: 'Este campo es requerido' },
    ],
    email: [
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'pattern', message: 'Solo se permiten emails' }
    ],
    password: [
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'minlength', message: 'Este campo debe tener minimo 8 caracteres' }
    ]
  };
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['',
        [
          Validators.required,
        ]
      ],
      documentType: ['',
        [
          Validators.required,
        ]
      ],
      document: ['',
        [
          Validators.required,
        ]
      ],
      phone: ['',
        [
          Validators.required,
        ]
      ],
      email: ['',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        ]
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ]
    })
  }
  register() {
    if (this.signupForm.valid) {

    var user: User = {
      email: this.signupForm.controls['email'].value,
      password: this.signupForm.controls['password'].value,
      name: this.signupForm.controls['name'].value,
      documentType: this.signupForm.controls['documentType'].value,
      document: this.signupForm.controls['document'].value,
      phone: this.signupForm.controls['phone'].value,
      role: 1
    }
    this.response = this._userUseCase.signup(user);
    this.response.subscribe(
      (data: UserResponse) => {
        if (data) {
          this.user = data.user
          Swal.fire({
            title: 'Usuario Creado',
            text: 'El usuario ' + this.user.name + ' fue creado exitosamente',
            icon: 'success',
            confirmButtonText: 'Ok'
          });
        }
        else {
          Swal.fire({
            title: 'Usuario No Creado',
            text: 'El usuario ' + this.user.name + ' no pudo ser creado',
            icon: 'error',
            confirmButtonText: 'Ok'
          });
        }
      }
    )
  }
}
  public get f() {
    return this.signupForm.controls
  }
}
