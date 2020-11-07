import {NgModule} from '@angular/core';
import {MensagemService} from './mensagem.service';
import {PessoaService} from './pessoa.service';
import {MessageService} from 'primeng/api';

@NgModule({
  providers: [
    PessoaService,
    MessageService,
    MensagemService,
  ]
})
export class ServicesModule {

}
