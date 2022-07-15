import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route } from '@angular/router';
import { IntelsComponent } from './intels.component';

const routes: Route[] = [
  {
    path: '',
    component: IntelsComponent,
  },
];

@NgModule({
  declarations: [IntelsComponent],
  imports: [CommonModule],
  exports: [],
})
export class IntelsModule {}
