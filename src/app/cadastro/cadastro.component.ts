import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  meuFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.meuFormGroup = this.formBuilder.group({

      nome: ['', Validators.required],
      data: ['', Validators.required],
      placa: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.email
      ]]
    });

  }

cadastrar() {
  if (!this.meuFormGroup.valid) {
    console.log("Formulário inválido");
    return;
  }

  console.log("Formulário válido", this.meuFormGroup.value);

  console.log(this.meuFormGroup.value);

}

validar() {
  console.log(this.meuFormGroup);

}

}





