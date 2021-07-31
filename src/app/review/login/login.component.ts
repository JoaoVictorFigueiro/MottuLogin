import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginFormGroup!:FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginFormGroup = this.formBuilder.group({

      email: ['', [
        Validators.required,
        Validators.email]],
      senha: ['', [
        Validators.required,
        Validators.minLength(10)]]

    });

}
acessar(){
  if(!this.loginFormGroup.valid){
    console.log ("Formulario Valido!");
    return;
  }
console.log("Formulario Valido!", this.loginFormGroup.value);

console.log(this.loginFormGroup.value);
}

autenticar(){
    console.log (this.loginFormGroup)


}
}
