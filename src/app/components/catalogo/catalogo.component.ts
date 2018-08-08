import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../entities/producto';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  public productos: Producto[];

  constructor(private _productoService: ProductoService) { }

  ngOnInit() {
    this._productoService
      .getAll<Producto[]>()
      .subscribe((data: Producto[]) => this.productos = data);
  }

}
