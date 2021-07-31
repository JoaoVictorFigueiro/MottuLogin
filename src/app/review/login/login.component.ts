import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from './account/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginFormGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private accontService: AccountService,
    private router: Router) {
    this.loginFormGroup = this.formBuilder.group({

      email: ['', [
        Validators.required,
        Validators.email]],
      senha: ['', [
        Validators.required,
        Validators.minLength(10)]]
    });

  }
  acessar() {
    if (!this.loginFormGroup.valid) {
      console.warn("Formulario Invalido!");
      return;
    }
    window.localStorage.setItem('token','aquiEraParaSerUmToken');
    this.router.navigate(['/home']);

    console.log("Formulario Valido!", this.loginFormGroup.value);

    console.log(this.loginFormGroup.value);


  }
  logout() {
    window.localStorage.removeItem('token')
  }


  autenticar() {
    console.log(this.loginFormGroup)


  }
    async onSubmit(){
      try {
        const result = await this.accontService.login(this.loginFormGroup);
        console.log(`Login efetuado: ${result}`);

        this.router.navigate(['']);
      } catch (error) {
        console.error(error);
      }
    }
  }

