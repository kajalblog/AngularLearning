import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { UsersService } from '../services/users.service';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dialog:MatDialog,private router:Router,private userservice:UsersService) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')!=null)
    {
      console.log(localStorage.getItem('token'));
      this.userservice.checkOut().subscribe((response:any)=>{
        console.log(response);
      this.router.navigate(['/cafe/dashboard']);

      },(error)=>{
        console.log(error);
      })

    }
  }
  signupUser()
  {
    const dialogconfig=new MatDialogConfig();
    dialogconfig.width='550px';
    this.dialog.open(SignupComponent,dialogconfig);
  }
  login()
  {
    const dialogconfig=new MatDialogConfig();
    dialogconfig.width='550px';
    this.dialog.open(LoginComponent,dialogconfig);
  }

}
