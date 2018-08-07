import { HttpClient, HttpRequest, HttpInterceptor, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Configuration } from '../app.constants';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private actionUrl: string;
  target: string;

  constructor(private http: HttpClient, private _configuration: Configuration, ) {
    this.actionUrl = _configuration.ServerWithApiUrl;
  }

  public getAll<T>(): Observable<T> {
    return this.http.get<T>(this.actionUrl + this.target);
  }

}

@Injectable({
  providedIn: 'root'
})
export class CustomInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.headers.has('Content-Type')) {
      req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    }

    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
    console.log(JSON.stringify(req.headers));
    return next.handle(req);
  }
}
