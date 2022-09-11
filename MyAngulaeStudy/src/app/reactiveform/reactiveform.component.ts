import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  myReactiveForm!: FormGroup;
  isSubmitted:boolean=false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myReactiveForm=this.formBuilder.group({
      username:new FormControl('',[Validators.required,Validators.minLength(5)]),
      email:new FormControl('',[Validators.required,Validators.email])
      // 'course':new FormControl(null)
    })
  }
   get f() { return this.myReactiveForm.controls; }
  myForm()
  {
    this.isSubmitted=true;
    console.log(this.myReactiveForm);
  }

  get g() {
    return this.myReactiveForm.controls;
  }

}
