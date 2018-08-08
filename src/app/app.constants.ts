import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Configuration {
    public Server = 'http://localhost:9090/';
    public ApiUrl = 'api/';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}
