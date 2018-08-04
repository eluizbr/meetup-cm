import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const NG_MODULES = [ReactiveFormsModule, FormsModule];

@NgModule({
  imports: [CommonModule, ...NG_MODULES],

  exports: [...NG_MODULES],
  declarations: []
})
export class SharedModule {}
