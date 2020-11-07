import {Injectable} from '@angular/core';
import {Requests} from '../helpers/requests';
import {PessoaDto} from '../model/dto/pessoa-dto';
import {Tarefa} from '../model/entity/tarefa';

@Injectable()
export class PessoaService {

  private urlComplent: string = '/pessoa';

  constructor(private request: Requests) {
  }

  buscarPorId(id: number) {
    return this.request.get(`${this.urlComplent}/${id}`,
      'Ocorreu um erro ao buscar a pessoa referente ao ID: ' + id);
  }

  cadastrar(pessoa: PessoaDto) {
    return this.request.post(this.urlComplent,
      'Ocorreu um erro ao tentar cadastrar a pessoa.',
      pessoa);
  }

  listarTodas() {
    return this.request.get(this.urlComplent,
      'Ocorreu um erro ao buscar as pessoas cadastradas.');
  }

  alterar(id: number, pessoa: PessoaDto) {
    return this.request.put(`${this.urlComplent}/${id}`,
      'Ocorreu um erro ao tentar alterar os dados da pessoa.',
      pessoa);
  }

  deletar(id: number) {
    return this.request.delete(`${this.urlComplent}/${id}`,
      'Ocorreu um erro ao tentar deletar a pessoa selecionada.');
  }

  cadastrarTarefa(idPessoa: number, tarefa: Tarefa) {
    return this.request.post(`${this.urlComplent}/${idPessoa}/tarefa`,
      'Ocorreu um erro ao tentar cadastrar a tarefa.',
      tarefa);
  }

  alterarTarefa(id: number, tarefa: Tarefa) {
    return this.request.put(`${this.urlComplent}/${id}/tarefa`,
      'Ocorreu um erro ao tentar alterar a tarefa.',
      tarefa);
  }

  deletarTarefa(idPessoa: number, idTarefa: number) {
    return this.request.delete(`${this.urlComplent}/${idPessoa}/tarefa/${idTarefa}`,
      'Ocorreu um erro ao tentar deletar a tarefa.');
  }
}
