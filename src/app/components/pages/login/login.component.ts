import { LoginModel } from './../../../models/loginModel';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: LoginModel
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      eMail: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  checkUser() {
    this.authService.checkUser(this.loginForm.value).subscribe(data => {
      this.users = data;
      console.log(this.users)
      if(data[0]){
      localStorage.setItem("loginToken","asdfghjkl123456")
        location.href="/car-list"
      }


    }
    )
  }



  // login() {
  //   if (this.loginForm.valid) {
  //     console.log(this.loginForm.value);
  //     let loginModel = Object.assign({}, this.loginForm.value)

  //   }
  // }

}
