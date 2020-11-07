import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {MensagemService} from '../services/mensagem.service';

@Injectable()
export class Requests {
  protected headers = new HttpHeaders({'Content-Type': 'application/json'});
  protected readonly urlBase: string;

  constructor(protected http: HttpClient,
              private messageService: MensagemService) {
    this.urlBase = `${environment.url}`;
  }

  get(urlComplement: string,
      mensagemErro: string,
      params?: HttpParams) {

    if (params) {
      return this.http.get(`${this.urlBase}${urlComplement}`,
        {
          headers: this.headers,
          params
        })
        .toPromise()
        .catch(error => {
          this.carregarMensagemErro(error.error.message, mensagemErro);
        });

    } else {

      return this.http.get(`${this.urlBase}${urlComplement}`,
        {headers: this.headers})
        .toPromise().catch(error => {
          this.carregarMensagemErro(error.error.message, mensagemErro);
        });
    }
  }

  async post(urlComplement: string, mensagemErro: string, body?: any) {

    return this.http.post(`${this.urlBase}${urlComplement}`,
      body ? JSON.stringify(body) : {},
      {headers: this.headers}
    ).toPromise()
      .catch(error => {
        console.log(error);
        this.carregarMensagemErro(error.error.message, mensagemErro);
        throw error;
      });
  }

  async delete(urlComplement: string, mensagemErro: string) {

    return this.http.delete(`${this.urlBase}${urlComplement}`,
      {headers: this.headers}
    ).toPromise()
      .catch(error => {
        console.log(error);
        this.carregarMensagemErro(error.error.message, mensagemErro);
        throw error;
      });
  }

  async put(urlComplement: string, mensagemErro, body?: any) {

    return this.http.put(`${this.urlBase}${urlComplement}`,
      body ? JSON.stringify(body) : {},
      {headers: this.headers})
      .toPromise()
      .catch(error => {
        console.log(error);
        this.carregarMensagemErro(error.error.message, mensagemErro);
        throw error;
      });
  }

  private carregarMensagemErro(mensagemEsperada, mensagemNaoEsperada) {
    if (mensagemEsperada) {
      this.messageService.erro(JSON.stringify(mensagemEsperada));
    } else {
      this.messageService.erro(mensagemNaoEsperada);
    }
  }
}
