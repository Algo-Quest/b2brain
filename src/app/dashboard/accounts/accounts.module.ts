import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AccountsComponent } from './accounts.component';

const routes: Route[] = [
  {
    path: '',
    component: AccountsComponent,
    children: [
      {
        path: 'manage-all',
        loadChildren: () =>
          import('./manage-all/manage-all.module').then(
            (m) => m.ManageAllModule
          ),
      },
      {
        path: 'track-new-accounts',
        loadChildren: () =>
          import('./track-new-accounts/track-new-accounts.module').then(
            (m) => m.TrackNewAccountsModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [AccountsComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class AccountsModule {}
