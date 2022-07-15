import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MaterialModule, SearchBarModule } from 'src/app/shared';

import { DashboardSectionComponent } from './dashboard-section.component';
import { DashboardSectionHttpService } from './service/dashboard-section-http.service';
import { DashboardSectionService } from './service/dashboard-section.service';

const routes: Route[] = [
  {
    path: '',
    component: DashboardSectionComponent,
  },
];

@NgModule({
  declarations: [DashboardSectionComponent],
  imports: [
    RouterModule.forChild(routes),
    SearchBarModule,
    MaterialModule,
    CommonModule,
  ],
  exports: [RouterModule],
  providers: [DashboardSectionHttpService, DashboardSectionService],
})
export class DashboardSectionModule {}
