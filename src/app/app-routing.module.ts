import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './review/login/login.component';
import { TabelaComponent } from './tabela/tabela.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'tabela', component: TabelaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
