import {Tarefa} from './tarefa';

export class Pessoa {
  id: number;
  nome: string;
  tarefas: Tarefa[];

  constructor(id: number = -1, nome: string = '', tarefas: Tarefa[] = new Array<Tarefa>()) {
    this.id = id;
    this.nome = nome;
    this.tarefas = tarefas;
  }
}
