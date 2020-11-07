import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PessoasComponent} from './pages/pessoas/pessoas.component';
import {TarefasComponent} from './pages/tarefas/tarefas.component';

const routes: Routes = [
  {
    path: '',
    component: PessoasComponent,
  },
  {
    path: 'tarefas',
    component: TarefasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
