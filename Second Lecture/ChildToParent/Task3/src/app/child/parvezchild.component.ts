import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-child',
    templateUrl: './parvezchild.component.html',
  })

export class ParveztChildComponent implements OnInit{
    @Input() receivedParentMessage:string;
    @Output() messageToEmit=new EventEmitter<string>();
    messageToSendC:string="Hello Parent!";
    constructor(){
        
    } 
    ngOnInit(): void {
        
    }
    sendMessageToParent(message:string){
        this.messageToEmit.emit(message);
    }
}