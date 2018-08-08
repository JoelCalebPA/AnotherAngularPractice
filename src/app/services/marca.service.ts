import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../app.constants';
import { Observable } from 'rxjs';
import { Marca } from '../entities/marca';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  private actionUrl: string;

  constructor(private http: HttpClient, private _configuration: Configuration, ) {
    this.actionUrl = _configuration.ServerWithApiUrl + 'marca';
  }

  public getAll<T>(): Observable<Marca[]> {
    return this.http.get<Marca[]>(this.actionUrl);
  }
}
