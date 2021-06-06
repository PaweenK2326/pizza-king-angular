import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmedValidator } from '../../validators/confirmed.validator';

import { faUser, faVenusMars, faMobileAlt, faBirthdayCake } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public userIcon = faUser;
  public genderIcon = faVenusMars;
  public mobileIcon = faMobileAlt;
  public cakeIcon = faBirthdayCake;

  registerForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    gender: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl('', [
      Validators.required, 
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required, 
      Validators.minLength(4),
      Validators.maxLength(25)
    ]),
    confirmpassword: new FormControl('', [Validators.required, ]),
    terms: new FormControl('', [Validators.required]),
  },  {
    validators: ConfirmedValidator('password', 'confirmpassword')
  });

  constructor() { }

  ngOnInit(): void {
  }

  get firstname() { return this.registerForm.get('firstname') };
  get lastname() { return this.registerForm.get('lastname') };
  get email() { return this.registerForm.get('email') };
  get password() { return this.registerForm.get('password') };  
  get confirmpassword() { return this.registerForm.get('confirmpassword') };  

  onRegister(){
    console.log(this.registerForm.value);
  }
}
