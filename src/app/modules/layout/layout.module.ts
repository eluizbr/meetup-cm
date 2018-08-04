import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [CommonModule, LayoutRoutingModule, SharedModule],
  declarations: [
    MainComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent
  ]
})
export class LayoutModule {}
