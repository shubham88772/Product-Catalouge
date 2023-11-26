import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  searchTriggered = false;
  keyword:any;
  searchProducts:any;

  constructor(private _userService : UserServiceService,private _router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this._router.navigateByUrl('/login');
  }

  register(){
    this._router.navigateByUrl('/register')
  }

  onSearch(){
    console.log(this.keyword);
    this.searchTriggered = true;
    // this.homeTriggered = false;
    this._userService.searchResults(this.keyword).subscribe((Response)=>{
      console.log(Response,"response for search ==>")
      this.searchProducts = Response;
    })
}
}
