import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Configuration {
    public Server = 'http://192.168.137.165:9090/';
    public ApiUrl = 'api/';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}
