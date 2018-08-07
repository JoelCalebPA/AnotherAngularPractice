import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { ToasterService } from 'angular2-toaster';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  public values: any[];

  constructor(private _productoService: ProductoService,
    private _toasterService: ToasterService,
    private _slimLoadingBarService: SlimLoadingBarService) { }

  ngOnInit() {
    this._slimLoadingBarService.start();

    this._productoService
      .getAll<any[]>()
      .subscribe((data: any[]) => this.values = data,
        error => () => { this._toasterService.pop('error', 'Damn', 'Something went wrong...'); },
        () => {
          this._toasterService.pop('success', 'Complete', 'Getting all values complete');
          this._slimLoadingBarService.complete();
        });

  }

}
