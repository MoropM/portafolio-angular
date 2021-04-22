import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any [] = [];

  constructor( private http: HttpClient ) { 
    // this.uri = 'http://soporte19mf.x10.mx/DB2021/v1/articulos';
    this.cargarInfo();
    this.cargarEquipo();

  }

  private cargarInfo() {
     // Leer el archivo Json
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina )=> {
        this.cargada = true;
        this.info = resp;
      });
  }

  private cargarEquipo() {
    this.http.get('https://angular-html-ef764-default-rtdb.firebaseio.com/equipo.json')
      .subscribe( ( resp: any [] ) => {
        this.cargada = true;
        this.equipo = resp;
      });
  }

}
