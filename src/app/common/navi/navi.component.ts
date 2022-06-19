import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  isLogged:boolean=false;
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("loginToken")){
        this.isLogged = true;


    }
    else
    this.isLogged = false ;


  }

  logOut(){
  localStorage.removeItem("loginToken");
  location.href="/car-list"
  }



}
