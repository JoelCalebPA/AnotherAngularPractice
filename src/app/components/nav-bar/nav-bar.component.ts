import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  title = 'Hello form Navbar';

  HEROES: string[] = [
    'Mr. Nice',
    'Narco',
    'Bombasto',
    'Celeritas',
    'Magneta',
    'RubberMan',
    'Dynama',
    'Dr IQ',
    'Magma',
    'Tornado'];

    header = 'Nombre';

  constructor() { }

  ngOnInit() {
  }

}
