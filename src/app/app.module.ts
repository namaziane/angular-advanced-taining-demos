import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TrainingModule} from "./training/training.module";
import {UserModule} from "./user/user.module";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";



@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    UserModule,
    TrainingModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
