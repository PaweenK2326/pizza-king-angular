import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public eyeIcon = faEyeSlash;
  public googleIcon = faGoogle;
  public facebokkIcon = faFacebookF;

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required, 
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required, 
      Validators.minLength(4),
      Validators.maxLength(25)
    ])
  });

  constructor() { }

  ngOnInit(): void {
  }

  get email() { return this.loginForm.get('email') };
  get password() { return this.loginForm.get('password') };  

  showPassword(): void{
    const input = document.querySelector('#password') as HTMLInputElement;
    if(input.type === 'password'){
      this.eyeIcon = faEye;
      input.setAttribute('type', 'text');
    } else {
      this.eyeIcon = faEyeSlash;
      input.setAttribute('type', 'password');
    }
  }

  onLogin(){
    console.log(this.loginForm.value);
  }
}
