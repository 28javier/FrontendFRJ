
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// ruta login
import { LoginComponent } from './login/login.component';


const routes: Routes = [
    {path: 'login', component: LoginComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule {}
