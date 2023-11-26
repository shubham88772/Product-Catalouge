import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CustomerLoggedComponent } from './customer-logged/customer-logged.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { AuthGuard } from './authentication/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    CustomerLoggedComponent,
    SingleProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '' , component: HomepageComponent},
      { path: 'login',component:LoginComponent},
      { path: 'register',component:RegisterComponent},
      { path: 'loggedIn',component:CustomerLoggedComponent,canActivate:[AuthGuard]},
      { path: 'product/:id',component:SingleProductComponent,canActivate:[AuthGuard]}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
