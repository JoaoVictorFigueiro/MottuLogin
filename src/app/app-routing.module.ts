import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './review/login/login.component';
import { TabelaComponent } from './tabela/tabela.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'tabela', component: TabelaComponent},
  {path: 'cadastro', component: CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
