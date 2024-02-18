import {Routes} from '@angular/router';
import {ListComponent} from "./user/list/list.component";

export const routes: Routes = [{
  path: 'users', component: ListComponent
}, {
  path: 'trainings', component: ListComponent
}];
