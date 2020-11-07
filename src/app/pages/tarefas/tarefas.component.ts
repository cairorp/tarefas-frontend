import {Component, OnInit} from '@angular/core';
import {PessoaService} from '../../services/pessoa.service';
import {DialogService} from 'primeng/dynamicdialog';
import {DeletarPessoaComponent} from '../pessoas/deletar/deletar-pessoa.component';
import {Pessoa} from '../../model/entity/pessoa';
import {ActivatedRoute, Router} from '@angular/router';
import {CadastrarTarefaComponent} from './cadastrar/cadastrar-tarefa.component';
import {Tarefa} from '../../model/entity/tarefa';
import {AlterarTarefaComponent} from './alterar/alterar-tarefa.component';
import {DeletarTarefaComponent} from './deletar/deletar-tarefa.component';

@Component({
  templateUrl: 'tarefas.component.html',
  styleUrls: ['tarefas.component.scss']
})
export class TarefasComponent implements OnInit {

  id: number;
  pessoa: Pessoa = new Pessoa();

  constructor(private pessoaService: PessoaService,
              private dialogService: DialogService,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.id = params.id;
    });
  }

  ngOnInit(): void {
    this.carregarTarefas();
  }

  carregarTarefas() {
    this.pessoaService
      .buscarPorId(this.id)
      .then((result: Pessoa) => {
        this.pessoa = result;
      });
  }

  abrirModalCadastro() {
    const ref = this.dialogService.open(CadastrarTarefaComponent,
      {
        header: 'Cadastrar tarefa',
        data: this.pessoa.id,
        width: '30%',
        closable: false
      });

    ref.onClose
      .subscribe((result: Tarefa) => {
        if (result) {
          this.pessoa.tarefas.push(result);
        }
      });
  }

  abrirModalAlteracao(tarefa) {
    const ref = this.dialogService.open(AlterarTarefaComponent,
      {
        header: 'Alterar tarefa',
        width: '30%',
        data: {
          tarefa: tarefa,
          idPessoa: this.pessoa.id
        },
        closable: false
      });

    ref.onClose
      .subscribe((result: Tarefa) => {
        if (result) {
          this.pessoa.tarefas = this.pessoa.tarefas.filter(t => t.id !== tarefa.id);
          this.pessoa.tarefas.push(result);
        }
      });
  }

  abrirModalDeletar(tarefa) {
    const ref = this.dialogService.open(DeletarTarefaComponent,
      {
        header: 'Deletar tarefa',
        width: '30%',
        data: {
          id: this.pessoa.id,
          tarefa: tarefa
        },
        closable: false
      });

    ref.onClose
      .subscribe((result: number) => {
        if (result) {
          this.pessoa.tarefas = this.pessoa.tarefas.filter(t => t.id !== result);
        }
      });
  }

  voltar(){
    this.router.navigate(['']);
  }
}
