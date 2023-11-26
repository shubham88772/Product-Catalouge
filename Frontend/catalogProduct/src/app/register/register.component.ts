import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewUser } from '../new-user';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser = new NewUser("","","","");
  confirmpassword:any;
  valid = true;
  alert:boolean = false;
  registered:boolean = false;

  constructor(private _userService : UserServiceService , private _router: Router) { }

  ngOnInit(): void {
    
  }

  // validation(string p ,string cp){

  // }

  onSubmit(){
    console.log(this.newUser.firstName);
    console.log(this.newUser.lastName);
    console.log(this.confirmpassword);
    if(this.confirmpassword != this.newUser.password){
        console.log(false);
        this.alert = true;
      }else{
    this._userService.registration(this.newUser)
    .subscribe((Response)=>{
      const valid = Response;
      console.log(valid);
      console.log(true);
      this.registered = true;
    })
  }
  }
}
