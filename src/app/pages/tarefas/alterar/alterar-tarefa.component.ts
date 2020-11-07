import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PessoaService} from '../../../services/pessoa.service';
import {PessoaDto} from '../../../model/dto/pessoa-dto';
import {PessoaListaDto} from '../../../model/dto/pessoa-lista-dto';
import {Tarefa} from '../../../model/entity/tarefa';

@Component({
  templateUrl: 'alterar-tarefa.component.html',
  styleUrls: ['alterar-tarefa.component.scss']
})
export class AlterarTarefaComponent implements OnInit{

  tarefa: Tarefa = new Tarefa();
  idPessoa: number;
  alterarForm: FormGroup;

  constructor(private ref: DynamicDialogRef,
              private formBuilder: FormBuilder,
              private config: DynamicDialogConfig,
              private pessoaService: PessoaService){
  }

  ngOnInit(): void {
    this.tarefa = this.config.data.tarefa;
    this.idPessoa = this.config.data.idPessoa;

    this.alterarForm = this.formBuilder.group({
      titulo: new FormControl(this.tarefa.titulo, [Validators.required, Validators.maxLength(100)]),
      descricao: new FormControl(this.tarefa.descricao, [Validators.required, Validators.maxLength(500)])
    });
  }

  alterar(){
    this.pessoaService.alterarTarefa(this.idPessoa, this.getTarefa())
      .then((result : Tarefa) => {
        console.log(result);
        this.ref.close(result);
      });
  }

  getTarefa(){
    return <Tarefa> {
      id: this.tarefa.id,
      titulo: this.f.titulo.value,
      descricao: this.f.descricao.value
    }
  }

  get f(){
    return this.alterarForm.controls;
  }

  fechar(){
    this.ref.close();
  }

}
