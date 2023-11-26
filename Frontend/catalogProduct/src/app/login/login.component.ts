import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User("","");
  valid = false;
  alert:boolean = false;

  constructor(private _userService : UserServiceService , private _router: Router) { }

  ngOnInit(): void {
  }

onSubmit(){
  console.log(this.user);
  this._userService.authentication(this.user)
  .subscribe((Response)=>{
    const valid = Response;
    console.log('response from post data is', Response);
    if(valid === true){
      this._userService.loggedUser=true;
      this._router.navigateByUrl('/loggedIn');
    }else{
      this.alert = true;
    }
  })
}
}
