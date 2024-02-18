import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./user.service";
import {RouterModule} from "@angular/router";

import {Routes} from '@angular/router';
import {ListComponent} from "./list/list.component";

export const routes1: Routes = [{
  path: '', component: ListComponent
}];

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule, HttpClientModule, RouterModule.forChild(routes1)
  ],
  providers:[UserService],
  exports: [ListComponent]
})
export class UserModule {
}
