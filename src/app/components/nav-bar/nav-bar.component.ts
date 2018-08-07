import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public marcas: any[];

  constructor(private _productoService: ProductoService) {
    _productoService.target = 'marca';
  }

  ngOnInit() {
    this._productoService
      .getAll<any[]>()
      .subscribe((data: any[]) => this.marcas = data);
  }

}
