import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PessoaService} from '../../../services/pessoa.service';
import {PessoaDto} from '../../../model/dto/pessoa-dto';

@Component({
  templateUrl: 'cadastrar-pessoa.component.html',
  styleUrls: ['cadastrar-pessoa.component.scss']
})
export class CadastrarPessoaComponent implements OnInit{

  pessoa: PessoaDto = new PessoaDto();
  cadastrarForm: FormGroup;

  constructor(private ref: DynamicDialogRef,
              private formBuilder: FormBuilder,
              private config: DynamicDialogConfig,
              private pessoaService: PessoaService){}

  ngOnInit(): void {
    this.cadastrarForm = this.formBuilder.group({
      nome: new FormControl('', [Validators.required, Validators.maxLength(100)])
    });
  }

  cadastrar(){
    this.pessoaService.cadastrar(this.getPessoa())
      .then(result => {
        this.ref.close(result);
      });
  }

  getPessoa(){
    return <PessoaDto> {
      nome: this.f.nome.value
    }
  }

  get f(){
    return this.cadastrarForm.controls;
  }

  fechar(){
    this.ref.close();
  }

}
