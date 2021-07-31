import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AuthenticationComponent } from './home/authentication/authentication.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './review/login/login.component';
import { AuthGuard } from './review/login/shared/auth.guard';
import { TabelaComponent } from './tabela/tabela.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent,
  children: [

  {path: 'tabela', component: TabelaComponent},
  {path: 'cadastro', component: CadastroComponent},
  
  ],
  canActivate: [AuthGuard]
},
{
  path: '',
  component: AuthenticationComponent,
  children: [
    {path: '', redirectTo: 'login', pathMatch:'full'},
    {path: 'login', component: LoginComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
