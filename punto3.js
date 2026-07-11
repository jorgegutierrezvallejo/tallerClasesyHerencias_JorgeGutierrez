console.log("Iniciando Punto 3");

// Clase padre
class UsuarioNequi {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }

  enviar(monto) {
    if (monto > this.saldo) {
      return "Saldo insuficiente";
    }

    this.saldo -= monto;

    return this.nombre + " envió $" + monto + ". Saldo nuevo: $" + this.saldo;
  }
}

// Clase hija
class ComercioNequi extends UsuarioNequi {
  constructor(nombre, saldo, comision) {
    super(nombre, saldo);
    this.comision = comision;
  }

  // Sobreescritura del método enviar
  enviar(monto) {
    let valorComision = monto * (this.comision / 100);
    let total = monto + valorComision;

    return super.enviar(total);
  }
}

// Crear un usuario normal
let usuario1 = new UsuarioNequi(
  "Kelly",
  500000
);

// Crear un comercio con comisión del 3%
let comercio1 = new ComercioNequi(
  "Zapatoca",
  500000,
  3
);

// Ambos envían el mismo monto
console.log(usuario1.enviar(100000));
console.log(comercio1.enviar(100000));

// Comparar los saldos finales
console.log("Saldo final del usuario: $" + usuario1.saldo);
console.log("Saldo final del comercio: $" + comercio1.saldo);