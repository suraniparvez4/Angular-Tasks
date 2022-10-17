import { Component,OnInit } from "@angular/core";

@Component({
    selector: 'app-parent',
    templateUrl: './parvezparent.component.html',
  })

export class ParvezParentComponent implements OnInit{
    messageToSendP:string='';
    constructor(){

    }
    ngOnInit(): void {
        
    }
    sendToChild(message:string){
        this.messageToSendP=message;
    }
}