import { Component, OnInit } from '@angular/core';
import { Producto } from '../modelos/producto.modelo';

@Component({
  selector: 'app-viewmodelo',
  templateUrl: './viewmodelo.component.html',
  styleUrls: ['./viewmodelo.component.css']
})
export class ViewmodeloComponent implements OnInit {
  producto1 = new Producto(1, 'Procesadores', 'AMD', 'RYZEN 5 2400G', 27899.99, 'Lorem ipsum, dolor sit amet consectetur');
  constructor() { }

  ngOnInit() {
  }

}
