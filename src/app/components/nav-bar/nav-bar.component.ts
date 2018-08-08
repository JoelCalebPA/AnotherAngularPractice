import { Component, OnInit } from '@angular/core';
import { Marca } from '../../entities/marca';
import { MarcaService } from '../../services/marca.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public marcas: Marca[];

  constructor(private _marcaService: MarcaService) { }

  ngOnInit() {
    this._marcaService
      .getAll<Marca[]>()
      .subscribe((data: Marca[]) => this.marcas = data);
  }

}
