import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SnakbarService } from '../services/snakbar.service';
import { UsersService } from '../services/users.service';
import { GlobalConstant } from '../shared/global-constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm:any=FormGroup;
responseMessage:any='';
  constructor(private formbuilder:FormBuilder,private router:Router,private userservice:UsersService,private snakbar:SnakbarService,private dialogRef:MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
    this.loginForm=this.formbuilder.group({
      email:[null,[Validators.required,Validators.pattern(GlobalConstant.EmailRegex)]],
      password:[null,[Validators.required]]
    })
  }

  handleLogin()
  {
    var formData=this.loginForm.value;
    var data={
      email:formData.email,
      password:formData.password
    }
    this.userservice.login(data).subscribe((response:any)=>{
      debugger
      console.log(response);

      // this.ngxservice.stop();
      this.dialogRef.close();
      console.log(response.token);
      const result=JSON.stringify(response);
      console.log(result);
      localStorage.setItem('token',result);

      console.log(localStorage.getItem('token'));

      this. responseMessage=response?.message;

      this.snakbar.openSnakbar(this.responseMessage,"");
      this.router.navigate(['/cafe/dashboard']);



    },(error)=>{
      console.log(error,"getting error")
      // this.ngxservice.stop();
      if(error.error?.message)
      {
        this.responseMessage=error.error?.message;
      }
      else{
        this.responseMessage=GlobalConstant.genericError
      }
      this.snakbar.openSnakbar(this.responseMessage,GlobalConstant.error)
    })
  }


  }


