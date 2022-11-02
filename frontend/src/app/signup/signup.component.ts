import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { SnakbarService } from '../services/snakbar.service';
import { UsersService } from '../services/users.service';
import {Router} from '@angular/router'
import { MatDialogRef } from '@angular/material/dialog';
// import { NgxUiLoaderService } from 'ngx-ui-loader';
import { GlobalConstant } from '../shared/global-constant';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm:any=FormGroup;
  responseMessage:any='';

  constructor(private formbuilder:FormBuilder,private router:Router,private userservice:UsersService,private snakbar:SnakbarService,private dialogRef:MatDialogRef<SignupComponent>) { }

  ngOnInit(): void {
    this.signupForm=this.formbuilder.group({
      name:[null,[Validators.required,Validators.pattern(GlobalConstant.nameRegex)]],
      email:[null,[Validators.required,Validators.pattern(GlobalConstant.EmailRegex)]],
      contactNumber:[null,[Validators.required,Validators.pattern(GlobalConstant.contactRegex)]],
      password:[null,[Validators.required]]
    })

  }
  handleSubmit()
  {
    // this.ngxservice.start();
    var formData=this.signupForm.value;
    var data={
      name:formData.name,
      email:formData.email,
      contactNumber:formData.contactNumber,
      password:formData.password
    }
    this.userservice.signUp(data).subscribe((response:any)=>{
      // this.ngxservice.stop();
      console.log(response);
      this.dialogRef.close();
      this.responseMessage=response?.message;
      this.snakbar.openSnakbar(this.responseMessage,"");
      this.router.navigate(['/']);


    },(error)=>{
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
