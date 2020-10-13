import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// paginas
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { GraficasComponent } from './graficas/graficas.component';
import { ProgressComponent } from './progress/progress.component';

// modulo del shared
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    GraficasComponent,
    ProgressComponent,
],
exports: [
  DashboardComponent,
  PagesComponent,
  GraficasComponent,
  ProgressComponent,
],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }
