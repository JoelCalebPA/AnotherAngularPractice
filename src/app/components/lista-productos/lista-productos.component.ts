import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  public productos: any[];

  constructor(private _productoService: ProductoService) {
    _productoService.target = 'productos';
  }

  ngOnInit() {
    this._productoService
      .getAll<any[]>()
      .subscribe((data: any[]) => this.productos = data);
  }

}
