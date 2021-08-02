import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  
  text: String;
  day: String;
  reminder: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('mpi1ka');
    if(!this.text) {
      alert('Please add a task');
      console.log('mpika');
      return;
    }
  }

}
