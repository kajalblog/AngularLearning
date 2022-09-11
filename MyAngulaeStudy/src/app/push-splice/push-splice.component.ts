import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../Service/apiservice.service';
import { UserModel } from './pusharray-model';

@Component({
  selector: 'app-push-splice',
  templateUrl: './push-splice.component.html',
  styleUrls: ['./push-splice.component.css']
})
export class PushSpliceComponent implements OnInit {
  myReactiveForm!: FormGroup;

  userObj:UserModel=new UserModel()
  Users:any=[];
  allState:string[]=[];
  allCities:string[]=[];
  constructor(private formBuilder: FormBuilder,private stateapi:ApiserviceService) {
    this.getStates();
   }

  ngOnInit(): void {
    this.myReactiveForm=this.formBuilder.group({
      username:new FormControl('',[Validators.required,Validators.minLength(5)]),
      email:new FormControl('',[Validators.required,Validators.email]),
      statelist:new FormControl('',[Validators.required]),
      citylist:new FormControl("",Validators.required)
      // 'course':new FormControl(null)
    })
  }
  myForm()
  {
    // this.isSubmitted=true;
    this.userObj.username=this.myReactiveForm.value.username;
    this.userObj.email=this.myReactiveForm.value.email;
    this.userObj.statelist=this.myReactiveForm.value.statelist;
    this.userObj.citylist=this.myReactiveForm.value.citylist;
    this.Users.push(this.userObj);
    this.myReactiveForm.reset();
    console.log(this.myReactiveForm);
  }
 stateData={
  "country":"India"
 }
  getStates()
  {
    this.stateapi.getState(this.stateData).subscribe((res:any)=>{
      console.log(res);
      if(!res.error)
      {
        let state=res.data.states;
        this.allState=[];
        state.forEach((element:any) => {
          return this.allState.push(element.name);
          
        });
      }
    },err=>{
      console.log(err)
    })
  }

  getCities(state:any)
  {
    let cityData={
      "country":"India",
      "state":state.value
    }
    this.stateapi.getCity(cityData).subscribe((res:any)=>{
      console.log(res);
      if(!res.error)
      {
        let cities=res.data;
        this.allCities=[];
      cities.forEach((ct:any)=>{
        this.allCities.push(ct)
      })
      }

    },err=>{
      console.log(err);
    })

  }

}
