import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { TrackNewAccountsComponent } from './track-new-accounts.component';

const routes: Route[] = [
  {
    path: '',
    component: TrackNewAccountsComponent,
  },
];

@NgModule({
  declarations: [TrackNewAccountsComponent],
  imports: [RouterModule.forChild(routes)],
})
export class TrackNewAccountsModule {}
