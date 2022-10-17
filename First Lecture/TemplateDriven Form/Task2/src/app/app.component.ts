import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  user: User = {
    name: "Change",
    surname: "Me"
  };

  submit() {
    alert(`Submited with: ${this.user.name} ${this.user.surname}`);
  }
}

export interface User {
  name: string;
  surname: string;
}
