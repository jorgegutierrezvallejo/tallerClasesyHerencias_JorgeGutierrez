console.log("Iniciando Punto 2");

class Pelicula {
  constructor(titulo, duracion) {
    this.titulo = titulo;
    this.duracion = duracion;
    this.precioBase = 15000;
  }

  precioBoleta() {
    return this.precioBase;
  }

  ficha() {
    return this.titulo + " - " + this.duracion + " minutos - Precio: $" + this.precioBoleta();
  }
}

class PeliculaVIP extends Pelicula {
  constructor(titulo, duracion, incluyeComida) {
    super(titulo, duracion);
    this.incluyeComida = incluyeComida;
  }

  precioBoleta() {
    let precioFinal = this.precioBase + 25000;

    if (this.incluyeComida) {
      precioFinal += 18000;
    }

    return precioFinal;
  }
}

let pelicula1 = new Pelicula("Inception", 148);
let pelicula2 = new PeliculaVIP("Avengers: Endgame", 181, true);
let pelicula3 = new PeliculaVIP("The Matrix", 136, false);


console.log(pelicula1.ficha());
console.log(pelicula2.ficha());
console.log(pelicula3.ficha());