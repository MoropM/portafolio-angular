import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  cargando = true;
  producto: Productos[] = [];

  constructor( private http: HttpClient ) {
    this.cargarProductos();
   }

  private cargarProductos(){
    this.http.get('https://angular-html-ef764-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe( ( resp: Productos[] ) => {
        console.log(resp)
        this.producto = resp;
        // setTimeout( () => {
          this.cargando = false
        // }, 2000)
      })
  }

}
