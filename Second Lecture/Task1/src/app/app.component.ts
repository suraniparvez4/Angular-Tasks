import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Task1';
  studentName:string;
  isNewClassApply:boolean=true;
  newClasses  :Record<string,string>={};
  setClasses(){
    this.newClasses={color : 'blue','font-style':'italic'};
  };
  ngOnInit() {
    this.studentName='parvez';
      this.setClasses();
      this.isNewClassApply=!this.isNewClassApply;
  }
  toLowerCase(name:string){
    this.studentName=this.studentName.toUpperCase();
  }
}
