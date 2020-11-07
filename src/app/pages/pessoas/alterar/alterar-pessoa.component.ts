import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PessoaService} from '../../../services/pessoa.service';
import {PessoaDto} from '../../../model/dto/pessoa-dto';
import {PessoaListaDto} from '../../../model/dto/pessoa-lista-dto';

@Component({
  templateUrl: 'alterar-pessoa.component.html',
  styleUrls: ['alterar-pessoa.component.scss']
})
export class AlterarPessoaComponent implements OnInit{

  pessoa: PessoaListaDto = new PessoaListaDto();
  alterarForm: FormGroup;

  constructor(private ref: DynamicDialogRef,
              private formBuilder: FormBuilder,
              private config: DynamicDialogConfig,
              private pessoaService: PessoaService){

  }

  ngOnInit(): void {
    this.pessoa = this.config.data;

    this.alterarForm = this.formBuilder.group({
      nome: new FormControl(this.pessoa.nome, [Validators.required, Validators.maxLength(100)])
    });
  }

  alterar(){
    this.pessoaService.alterar(this.pessoa.id, this.getPessoa())
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
    return this.alterarForm.controls;
  }

  fechar(){
    this.ref.close();
  }

}
