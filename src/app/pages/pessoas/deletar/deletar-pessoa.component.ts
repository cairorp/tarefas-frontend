import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PessoaService} from '../../../services/pessoa.service';
import {PessoaDto} from '../../../model/dto/pessoa-dto';
import {PessoaListaDto} from '../../../model/dto/pessoa-lista-dto';

@Component({
  templateUrl: 'deletar-pessoa.component.html',
  styleUrls: ['deletar-pessoa.component.scss']
})
export class DeletarPessoaComponent implements OnInit{

  pessoa: PessoaListaDto = new PessoaListaDto();

  constructor(private ref: DynamicDialogRef,
              private formBuilder: FormBuilder,
              private config: DynamicDialogConfig,
              private pessoaService: PessoaService){

  }

  ngOnInit(): void {
    this.pessoa = this.config.data;
  }

  alterar(){
    this.pessoaService.deletar(this.pessoa.id)
      .then(() => {
        this.ref.close(this.pessoa.id);
      });
  }

  fechar(){
    this.ref.close();
  }

}
