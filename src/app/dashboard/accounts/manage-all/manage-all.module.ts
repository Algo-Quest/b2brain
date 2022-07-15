import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ManageAllComponent } from './manage-all.component';

const routes: Route[] = [
  {
    path: '',
    component: ManageAllComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class ManageAllModule {}
