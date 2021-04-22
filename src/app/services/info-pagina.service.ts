import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;


  constructor( private http: HttpClient ) { 
    // this.uri = 'http://soporte19mf.x10.mx/DB2021/v1/articulos';
    // this.uri = 'assets/data/data-pagina.json';

    // Leer el archivo Json
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina )=> {
        this.cargada = true;
        this.info = resp;

        // console.log(resp.pagina_autor)

        // console.log(this.info['twtter'])
      });


  }
}
