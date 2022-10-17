import { Component, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'App Component';
  emparray = ['one', 'two', 'three'];
  constructor(private route: Router) {}
  empclick() {
    this.route.navigate(['employee']);
    console.log(this.route.config);
  }
  ngOnInit() {}
}
