import { Component,Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-child',
    templateUrl: './parvezchild.component.html',
  })

export class ParveztChildComponent implements OnInit{
    @Input() receivedParentMessage:string;
    constructor(){
        
    } 
    ngOnInit(): void {
        
    }
}