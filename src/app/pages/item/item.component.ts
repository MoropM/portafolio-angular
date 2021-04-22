import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  // Obtenre el Url
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  cargando = true;

  producto: ProductoDescripcion;
  id: string;


  constructor( private route: ActivatedRoute, 
              public productoService: ProductosService ) { }

  ngOnInit() {
    this.route.params
      .subscribe( parametros => {
        // console.log(parametros['id'])
        this.productoService.getProducto(parametros['id'])
          .subscribe( (producto: ProductoDescripcion) => {
            this.producto = producto;
            this.id = parametros['id']
            this.cargando = false;
            // console.log(producto)
          })
      })
  }

}
