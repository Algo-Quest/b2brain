import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MaterialModule } from '../shared';
import { SideNavModule } from '../side-nav/side-nav.module';
import { DashboardComponent } from './dashboard.component';

const routes: Route[] = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./dashboard-section/dashboard-section.module').then(
            (m) => m.DashboardSectionModule
          ),
      },
      {
        path: 'intels',
        loadChildren: () =>
          import('./intels/intels.module').then((m) => m.IntelsModule),
      },

      {
        path: 'accounts',
        loadChildren: () =>
          import('./accounts/accounts.module').then((m) => m.AccountsModule),
      },
    ],
  },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [MaterialModule, SideNavModule, RouterModule.forChild(routes)],
  exports: [],
  providers: [],
})
export class DashboardModule {}
