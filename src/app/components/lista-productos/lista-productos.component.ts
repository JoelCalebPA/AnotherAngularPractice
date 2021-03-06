import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../entities/producto';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  public productos: Producto[];

  constructor(private _productoService: ProductoService) { }

  ngOnInit() {
    this._productoService
      .getAll<Producto[]>()
      .subscribe((data: Producto[]) => this.productos = data);
  }

}
