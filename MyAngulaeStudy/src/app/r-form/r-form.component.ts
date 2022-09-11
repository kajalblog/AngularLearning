import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-r-form',
  templateUrl: './r-form.component.html',
  styleUrls: ['./r-form.component.css']
})
export class RFormComponent implements OnInit {

  
  myReactive!: FormGroup;
  isSubmitted:boolean=false;
  constructor(private  formbuilder:FormBuilder) { }
  // myReactiveForm:FormGroup;

  ngOnInit(): void {
    this.myReactive= this.formbuilder.group({
      username:new FormControl("",[Validators.required,Validators.minLength(6)]),
      email:new FormControl("",[Validators.required,Validators.email])

    })
    
  }
  onSubmit()
  {
    // this.isSubmitted=true;
    console.log(this.myReactive.value);

  }

}
