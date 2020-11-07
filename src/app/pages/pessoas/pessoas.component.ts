import {Component, OnInit} from '@angular/core';
import {PessoaListaDto} from '../../model/dto/pessoa-lista-dto';
import {PessoaService} from '../../services/pessoa.service';
import {DialogService} from 'primeng/dynamicdialog';
import {CadastrarPessoaComponent} from './cadastrar/cadastrar-pessoa.component';
import {AlterarPessoaComponent} from './alterar/alterar-pessoa.component';
import {DeletarPessoaComponent} from './deletar/deletar-pessoa.component';
import {Router} from '@angular/router';
import {GraficoComponent} from './grafico/grafico.component';

@Component({
  templateUrl: 'pessoas.component.html',
  styleUrls: ['pessoas.component.scss']
})
export class PessoasComponent implements OnInit {

  pessoas: PessoaListaDto[] = new Array<PessoaListaDto>();

  constructor(private pessoaService: PessoaService,
              private dialogService: DialogService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.carregarPessoas();
  }

  carregarPessoas() {
    this.pessoaService
      .listarTodas()
      .then((result: PessoaListaDto[]) => {
        this.pessoas.push(...result);
      });
  }

  abrirModalCadastro() {
    const ref = this.dialogService.open(CadastrarPessoaComponent,
      {
        header: 'Cadastrar pessoa',
        width: '30%',
        closable: false
      });

    ref.onClose
      .subscribe((result: PessoaListaDto) => {
        if (result) {
          this.pessoas.push(result);
        }
      });
  }

  abrirModalAlteracao(pessoa) {
    const ref = this.dialogService.open(AlterarPessoaComponent,
      {
        header: 'Alterar pessoa',
        width: '30%',
        data: pessoa,
        closable: false
      });

    ref.onClose
      .subscribe((result: PessoaListaDto) => {
        if (result) {
          this.pessoas = this.pessoas.filter(p => p.id !== result.id);
          this.pessoas.push(result);
        }
      });
  }

  abrirModalDeletar(pessoa) {
    const ref = this.dialogService.open(DeletarPessoaComponent,
      {
        header: 'Deletar pessoa',
        width: '30%',
        data: pessoa,
        closable: false
      });

    ref.onClose
      .subscribe((result: number) => {
        if (result) {
          this.pessoas = this.pessoas.filter(p => p.id !== result);
        }
      });
  }

  abrirTarefas(id) {
    this.router.navigate(['tarefas'], {
      queryParams: {
        id: id
      }
    });
  }

  async abrirModalGrafico() {
    let dados: any[] = [];

    await this.pessoas.forEach(p => {
      dados.push({y: p.qtdTarefas, name: p.nome});
    });

    const ref = this.dialogService.open(GraficoComponent, {
      header: `Gráfico`,
      width: '50%',
      data: dados,
      contentStyle: {'max-height': '800px', 'overflow': 'auto'},
      baseZIndex: 10000
    });

  }
}
