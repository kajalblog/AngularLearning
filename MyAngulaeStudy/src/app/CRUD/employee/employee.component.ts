import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from 'src/app/Service/apiservice.service';
import { EmployeeModel } from '../employeeModel';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeForm!: FormGroup;

employeObj:EmployeeModel=new EmployeeModel();
employeeData:any;

editbtn:boolean=false;
addbtn:boolean=false;
  // employee: any;
  searchInput:any;

  constructor(public formbuilder:FormBuilder,public api:ApiserviceService) { }

  ngOnInit(): void {
    this.employeeForm= this.formbuilder.group({
      name:new FormControl("",[Validators.required,Validators.minLength(6)]),
      email:new FormControl("",[Validators.required,Validators.pattern("^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      mobile:new FormControl("",[Validators.required,Validators.pattern("[789][0-9]{9}")]),
      joiningdate: new FormControl("", [Validators.required]),
      salary:new FormControl("",[Validators.required])
    })
    this.getEmployee();
  }

  onSubmit()
  {
    // this.editbtn=false;
    this.employeObj.name=this.employeeForm.value.name;
    this.employeObj.email=this.employeeForm.value.email;
    this.employeObj.mobile=this.employeeForm.value.mobile;
    this.employeObj.joiningdate=this.employeeForm.value.joiningdate;
    this.employeObj.salary=this.employeeForm.value.salary;
    // console.log(this.employeeForm.value);

    this.api.postData(this.employeObj).subscribe(res=>{
      console.log(res);
      alert("Employee data addede successfully...");
      let ref=document.getElementById('cancle');
      ref?.click();
      this.employeeForm.reset();
      this.getEmployee();
    },err=>{
      alert("Something wrong..");
      console.log(err)
    })
  }

  getEmployee()
  {
    this.api.getData().subscribe(res=>{
      // console.log(res);
      this.employeeData=res;
    })
  }

  deleteEmployee(employee:any)
  {
    this.api.deleteData(employee.id).subscribe(res=>{
      alert("Data Deleted Successfully..");
      this.getEmployee();
    })
  }

  onEdit(employee:any)
  {
    this.editbtn=true;
    // this.employeObj.id=this.employee.id;
    this.employeObj.id=employee.id;
    this.employeeForm.controls['name'].setValue(employee.name);
    this.employeeForm.controls['email'].setValue(employee.email);
    this.employeeForm.controls['mobile'].setValue(employee.mobile);
    this.employeeForm.controls['joiningdate'].setValue(employee.joiningdate);
    this.employeeForm.controls['salary'].setValue(employee.salary);
    
   this. updateemployee()
  }
  onUpdate()
  {
    this.employeObj.name=this.employeeForm.value.name;
    this.employeObj.email=this.employeeForm.value.email;
    this.employeObj.mobile=this.employeeForm.value.mobile;
    this.employeObj.joiningdate=this.employeeForm.value.joiningdate;
    this.employeObj.salary=this.employeeForm.value.salary;
    this.api.updateData(this.employeObj,this.employeObj.id).subscribe(res=>{
alert("updated.."+JSON.stringify(res));
let ref=document.getElementById('cancle');
      ref?.click();
      this.employeeForm.reset();
      this.getEmployee();
    })
  }

  addEmployee()
  {
  this.addbtn=true;
  this.editbtn=false;
  }
  updateemployee()
  {
    this.addbtn=false;
  this.editbtn=true;
  }
}
