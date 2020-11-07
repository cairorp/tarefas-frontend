import {NgModule} from '@angular/core';
import {PessoasComponent} from './pessoas/pessoas.component';
import {TableModule} from 'primeng/table';
import {CadastrarPessoaComponent} from './pessoas/cadastrar/cadastrar-pessoa.component';
import {InputTextModule} from 'primeng/inputtext';
import {DialogService} from 'primeng/dynamicdialog';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {AlterarPessoaComponent} from './pessoas/alterar/alterar-pessoa.component';
import {DeletarPessoaComponent} from './pessoas/deletar/deletar-pessoa.component';
import {TarefasComponent} from './tarefas/tarefas.component';
import {CadastrarTarefaComponent} from './tarefas/cadastrar/cadastrar-tarefa.component';
import {AlterarTarefaComponent} from './tarefas/alterar/alterar-tarefa.component';
import {DeletarTarefaComponent} from './tarefas/deletar/deletar-tarefa.component';
import {GraficoComponent} from './pessoas/grafico/grafico.component';

@NgModule({
  imports: [
    TableModule,
    InputTextModule,
    ReactiveFormsModule
  ],
  declarations: [
    PessoasComponent,
    TarefasComponent,
    GraficoComponent,
    AlterarTarefaComponent,
    DeletarTarefaComponent,
    DeletarPessoaComponent,
    AlterarPessoaComponent,
    CadastrarPessoaComponent,
    CadastrarTarefaComponent,
  ],
  providers: [
    DialogService,
    FormBuilder]
})
export class PagesModule {
}
