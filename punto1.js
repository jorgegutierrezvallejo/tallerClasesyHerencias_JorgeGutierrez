console.log("Iniciando Punto 1");

class Restaurante {
  constructor(nombre, categoria, calificacion) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.calificacion = calificacion;
  }

  describir() {
    return this.nombre + " - " + this.categoria + " (" + this.calificacion + " estrellas)";
  }

  BienCalificado() {
    return this.calificacion >= 4.5;
  }
}

let restaurante1 = new Restaurante(
  "El Corral",
  "Hamburguesas",
  4.6
);

let restaurante2 = new Restaurante(
  "La Pizza Nostra",
  "Pizza",
  4.2
);

console.log(restaurante1.describir());
console.log(restaurante1.BienCalificado());

console.log(restaurante2.describir());
console.log(restaurante2.BienCalificado());