import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  constructor(private _userService : UserServiceService ,private _router: Router ,private route: ActivatedRoute) { }
  productDetail:any;
  id:any;
  _pincode:any;
  alert = false;
  location = false;

  ngOnInit(): void {
    document.body.className = "selector";
    this.id = this.route.snapshot.paramMap.get("id")
    console.log(this.id)
    this._userService.singleProduct(this.id).subscribe((Response)=>{
      console.log(Response ,"res+=");  
      this.productDetail = Response; 
    })
  }

  ngOnDestroy(){
    document.body.className="";
  }
  onHome(){
    this._router.navigateByUrl("/loggedIn")
  }

  onBuy(){
     console.log(this._pincode);
    
    if(this._pincode >= 110000 && this._pincode <= 110100){
        this.alert = false;
        this.location = true;
        console.log(true);
        console.log("Deliverale")
    }else{
      this.alert = true;
      this.location = false;
      console.log(false);
    }

  }

}
