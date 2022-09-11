import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {

  constructor(private task:TaskService) { }
  User:any;

  ngOnInit(): void {
    this.task.getData().subscribe(users=>{
      console.log(users);
      this.User=users
    })
  }

}
