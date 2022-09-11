import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signUp!:FormGroup;

  constructor(public formbuilder:FormBuilder,public http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.signUp=new FormGroup({
      username1:new FormGroup("",[Validators.required,Validators.minLength(10)]),
      email1:new FormGroup("",[Validators.required,Validators.pattern("^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password1:new FormGroup("",[Validators.required,Validators.minLength(8)]),
      mobile1:new FormGroup("",[Validators.required,Validators.pattern("[789][0-9]{9}")])
    })
  }
  regUser()
  {
    console.log(this.signUp.value);
    // this.http.post<any>("http://localhost:3000/registerUser",this.registerForm.value).subscribe(res=>{
    //   console.log(res)
    //   alert("Registratrd successfully...");
      
    //   this.registerForm.reset();
    // this.router.navigateByUrl('/login');
    // })
  }

}
