import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {FormBuilder} from '@angular/forms';
import {PessoaService} from '../../../services/pessoa.service';
import {Tarefa} from '../../../model/entity/tarefa';

@Component({
  templateUrl: 'deletar-tarefa.component.html',
  styleUrls: ['deletar-tarefa.component.scss']
})
export class DeletarTarefaComponent implements OnInit {

  id: number;
  tarefa: Tarefa;

  constructor(private ref: DynamicDialogRef,
              private formBuilder: FormBuilder,
              private config: DynamicDialogConfig,
              private pessoaService: PessoaService) {

  }

  ngOnInit(): void {
    this.id = this.config.data.id;
    this.tarefa = this.config.data.tarefa;
  }

  deletar() {
    this.pessoaService.deletarTarefa(this.id, this.tarefa.id)
      .then(() => {
        this.ref.close(this.id);
      });
  }

  fechar() {
    this.ref.close();
  }

}
