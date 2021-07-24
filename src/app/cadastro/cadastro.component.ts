import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  meuFormGroup: FormGroup | undefined;

  constructor(private formBuilder: FormBuilder) {}

  thismeuFormGroup = this.formBuilder.group({

    nome: ['', Validators.required],
    data: ['', Validators.required],
    placa: ['', Validators.required],
    telefone: ['', Validators.required],
    email: ['', [
        Validators.required,
        Validators.email
    ]]
});

postar() {
  if (!this.thismeuFormGroup.valid) {
    console.log("Formulário inválido");
    return;
  }
  console.log("Formulário válido", this.thismeuFormGroup.value);

  console.log(this.thismeuFormGroup.value);
  
}

validar() {
  console.log(this.thismeuFormGroup);

}
}





