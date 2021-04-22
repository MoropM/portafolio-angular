import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  cargando = true;
  producto: Productos[] = [];
  productoFiltrado: Productos[] = [];

  constructor( private http: HttpClient ) {
    this.cargarProductos();
   }

  private cargarProductos(){
    return new Promise( (resolve, reject) => {
      this.http.get('https://angular-html-ef764-default-rtdb.firebaseio.com/productos_idx.json')
        .subscribe( ( resp: Productos[] ) => {
          this.producto = resp;
          // setTimeout( () => {
            this.cargando = false;
          // }, 2000)
          // resolve( );
        });
    });

  }

  getProducto( id: string ){
    return this.http.get(`https://angular-html-ef764-default-rtdb.firebaseio.com/productos/${id}.json`)      
  }

  buscarProducto(termino: string){

    if( this.producto.length === 0 ){
      // Cargar productos
      this.cargarProductos().then( () => {
        // Ejecutar despues de tenre los producto
        // Aplicar filtro
        this.filtrarProductos(termino)
      })
    } else {
      // Aplicar filtro
      this.filtrarProductos(termino)
    }
  }

  private filtrarProductos(termino: string){
    // console.log(this.producto)
    // console.log({"termino":termino})

    this.productoFiltrado = []

    termino = termino.toLocaleLowerCase()

    this.producto.forEach( prod => {

      const tituloLower = prod.titulo.toLocaleLowerCase()

      if( prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0 ){
        this.productoFiltrado.push(prod)
      }
    })
    
  }


}
