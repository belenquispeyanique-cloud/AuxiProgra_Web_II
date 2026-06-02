import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  title = 'Catálogo de Ropa';

  nuevaPrenda = '';

  prendas = [
    { nombre: 'Chaqueta', favorito: false },
    { nombre: 'Pantalón Jeans', favorito: true },
    { nombre: 'Camiseta', favorito: false }
  ];

  agregar() {
    if (this.nuevaPrenda.trim()) {
      this.prendas.push({
        nombre: this.nuevaPrenda,
        favorito: false
      });

      this.nuevaPrenda = '';
    }
  }

  eliminar(indice: number) {
    this.prendas.splice(indice, 1);
  }

}