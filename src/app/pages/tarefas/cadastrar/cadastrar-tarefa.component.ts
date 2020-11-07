import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PessoaService} from '../../../services/pessoa.service';
import {PessoaDto} from '../../../model/dto/pessoa-dto';
import {Tarefa} from '../../../model/entity/tarefa';

@Component({
  templateUrl: 'cadastrar-tarefa.component.html',
  styleUrls: ['cadastrar-tarefa.component.scss']
})
export class CadastrarTarefaComponent implements OnInit{

  private idPessoa:number;
  cadastrarForm: FormGroup;

  constructor(private ref: DynamicDialogRef,
              private formBuilder: FormBuilder,
              private config: DynamicDialogConfig,
              private pessoaService: PessoaService){
    this.idPessoa = this.config.data;
  }

  ngOnInit(): void {
    this.cadastrarForm = this.formBuilder.group({
      titulo: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      descricao: new FormControl('', [Validators.required, Validators.maxLength(500)])
    });
  }

  cadastrar(){
    this.pessoaService.cadastrarTarefa(this.idPessoa, this.getTarefa())
      .then(result => {
        this.ref.close(result);
      });
  }

  getTarefa(){
    return <Tarefa> {
      titulo: this.f.titulo.value,
      descricao: this.f.descricao.value
    }
  }

  get f(){
    return this.cadastrarForm.controls;
  }

  fechar(){
    this.ref.close();
  }

}
