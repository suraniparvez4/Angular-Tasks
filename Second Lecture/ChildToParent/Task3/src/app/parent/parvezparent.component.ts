import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-parent',
    templateUrl: './parvezparent.component.html',
  })

export class ParvezParentComponent implements OnInit{
    receivedChildMessage:string;
    messageToSendP:string='';
    constructor(){

    }
    ngOnInit(): void {
        
    }
    getMessage(message:string){
        this.receivedChildMessage=message;
    }
}