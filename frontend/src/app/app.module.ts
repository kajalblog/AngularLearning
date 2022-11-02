import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material-module';
import { HomeComponent } from './home/home.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from './shared/shared.module';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RouterInterceptorInterceptor } from './services/router-interceptor.interceptor';
// import {NgxUiLoaderModule,NgxUiLoaderConfig,SPINNER,PB_DIRECTION} from "ngx-ui-loader";

// const ngUiloaderConfig:NgxUiLoaderConfig={
//   text:"Loading...",
//   textColor:"#FFFFFF",
//   textPosition:"center-center",
//   pbColor:'red',
//   fgsColor:'red',
//   fgsType:SPINNER.ballSpinClockwiseFadeRotating,
//   fgsSize:100,
//   pbDirection:PB_DIRECTION.leftToRight,
//   pbThickness:5

// }
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BestSellerComponent,
    FullComponent,
    AppHeaderComponent,
    AppSidebarComponent,
    SignupComponent,
    LoginComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule,
    HttpClientModule,
    // NgxUiLoaderModule.forRoot(ngUiloaderConfig)
  ],
  providers: [HttpClientModule,{provide:HTTP_INTERCEPTORS,useClass:RouterInterceptorInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
