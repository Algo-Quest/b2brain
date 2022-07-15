import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { SearchBarComponent } from './search-bar.component';

@NgModule({
  declarations: [SearchBarComponent],
  imports: [MaterialModule, ReactiveFormsModule, CommonModule],
  exports: [SearchBarComponent],
})
export class SearchBarModule {}
