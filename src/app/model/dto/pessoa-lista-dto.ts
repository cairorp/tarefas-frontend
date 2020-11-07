export class PessoaListaDto {
  private _id: number;
  private _nome: string;
  private _qtdTarefas: number;

  constructor(id: number = -1,
              nome: string = '',
              qtdTarefas: number = 0) {
    this._id = id;
    this._nome = nome;
    this._qtdTarefas = qtdTarefas;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }

  get qtdTarefas(): number {
    return this._qtdTarefas;
  }

  set qtdTarefas(value: number) {
    this._qtdTarefas = value;
  }

}
