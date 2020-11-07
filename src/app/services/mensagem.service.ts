import {Injectable} from '@angular/core';
import {MessageService} from 'primeng/api';

@Injectable()
export class MensagemService {

  constructor(private messageService: MessageService) {
  }

  sucesso(mensagem) {
    this.messageService.add(
      {
        severity: 'success',
        summary: 'Sucesso',
        detail: mensagem,
        closable: false
      });
  }

  erro(mensagem) {
    this.messageService.add(
      {
        severity: 'error',
        summary: 'Erro',
        detail: mensagem,
        life: 5000,
        closable: false
      });
  }

  aviso(mensagem) {
    this.messageService.add(
      {
        severity: 'warn',
        summary: 'Aviso',
        detail: mensagem,
        closable: false
      });
  }

  informacao(mensagem) {
    this.messageService.add(
      {
        severity: 'info',
        summary: 'Informação',
        detail: mensagem,
        closable: false
      });
  }
}
