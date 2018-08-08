import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Configuration } from '../app.constants';
import { Producto } from '../entities/producto';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private actionUrl: string;

  constructor(private http: HttpClient, private _configuration: Configuration, ) {
    this.actionUrl = _configuration.ServerWithApiUrl + 'productos';
  }

  public getAll<T>(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.actionUrl);
  }

}

