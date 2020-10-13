import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// rutas componentes
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficasComponent } from './graficas/graficas.component';
import { RegisterComponent } from '../auth/register/register.component';
import { ProgressComponent } from './progress/progress.component';



const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
          {path: '', component: DashboardComponent},
          {path: 'graficas',  component: GraficasComponent},
          {path: 'register',  component: RegisterComponent},
          {path: 'progress',  component: ProgressComponent}
        ]
      },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
