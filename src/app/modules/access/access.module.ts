import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AccessRoutingModule } from './access-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [CommonModule, SharedModule, AccessRoutingModule],
  declarations: [LoginComponent]
})
export class AccessModule {}
