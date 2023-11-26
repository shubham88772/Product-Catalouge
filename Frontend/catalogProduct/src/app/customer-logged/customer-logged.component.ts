import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-customer-logged',
  templateUrl: './customer-logged.component.html',
  styleUrls: ['./customer-logged.component.css']
})
export class CustomerLoggedComponent implements OnInit {
  
  constructor(private _userService : UserServiceService, private _router : Router) { }

  readData:any;
  keyword:any;
  searchProducts:any;
  keyword1:any;
  keyword2:any;

  l2h:any;
  h2l:any;

  homeProducts = true;
  searchTriggered = false;
  if_L2H = false;
  if_H2L = false;
  // homeTriggered = true;

  ngOnInit() {
    // document.body.className = "selector";
    this.searchTriggered = false;
    this._userService.displayProducts().subscribe((Response)=>{
      console.log(Response,"res==>");
      this.readData = Response;
    })
  }

// ngOnDestroy(){
//     document.body.className="";
//   }

  onSearch(){
    console.log(this.keyword);
    this.searchTriggered = true;
    this.homeProducts = false;
    this.if_L2H = false;
    this.if_H2L = false;
    this._userService.searchResults(this.keyword).subscribe((Response)=>{
      console.log(Response,"response for search ==>")
      this.searchProducts = Response;
    })
  }
  onSearch1(){
    console.log(this.keyword1);
    this.searchTriggered = true;
    this.homeProducts = false;
    this.if_L2H = false;
    this.if_H2L = false;
    this._userService.searchResults1(this.keyword1).subscribe((Response)=>{
      console.log(Response,"response for search ==>")
      this.searchProducts = Response;
    })
  }
  onSearch2(){
    console.log(this.keyword2);
    this.searchTriggered = true;
    this.homeProducts = false;
    this.if_L2H = false;
    this.if_H2L = false;
    this._userService.searchResults2(this.keyword2).subscribe((Response)=>{
      console.log(Response,"response for search ==>")
      this.searchProducts = Response;
    })
  }
  
  onHome(){
    this.searchTriggered = false;
    this.homeProducts = true;
    this.if_L2H = false;
    this.if_H2L = false;
  }

  lowerToHigher(){
    this.searchTriggered = false;
    this.homeProducts = false;
    this.if_L2H = true;
    this.if_H2L = false;
    this._userService.lowerToHigher().subscribe((Response)=>{
      console.log(Response,"response for search ==>")
      this.l2h = Response;
    })
  }

  higherToLower(){
    this.searchTriggered = false;
    this.homeProducts = false;
    this.if_L2H = false;
    this.if_H2L = true;
    this._userService.higherToLower().subscribe((Response)=>{
      console.log(Response,"response for search ==>")
      this.h2l = Response;
    })
  }
  logoutUser() {
    this._userService.loggedUser = false;
    this._router.navigate(['/login']);
  }
}