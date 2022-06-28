import { LoginModel } from './../../../models/loginModel';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService:AuthService, private formBuilder: FormBuilder) { }
  userAddForm: FormGroup;
  user: LoginModel;
  users: LoginModel[];
  createUserAddForm() {
    this.userAddForm = this.formBuilder.group({
      eMail: ["", Validators.required],
      password: ["", Validators.required]

    })
  }
  ngOnInit(): void {
    this.createUserAddForm();
  }
  addUser() {
    if (this.userAddForm.valid) {
      this.user = Object.assign({}, this.userAddForm.value)
    }
    this.authService.addUser(this.user).subscribe(data => {
      alert(data.eMail + " Kişi Başarıyla Eklendi.")
      location.reload();
    })

  }
}
