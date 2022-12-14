import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ParvezComponent } from './parvez/parvez.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'employee',
        component: ParvezComponent,
      },
    ]),
  ],
  declarations: [AppComponent, ParvezComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
