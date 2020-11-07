export class Tarefa {
  id: number;
  titulo: string;
  descricao: string;

  constructor(id: number = -1, titulo: string = '', descricao: string = '') {
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
  }
}
