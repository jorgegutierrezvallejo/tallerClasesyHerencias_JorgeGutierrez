console.log("Iniciando Punto 4");


class Vehiculo {
  constructor(placa, pasajeros) {
    this.placa = placa;
    this.pasajeros = pasajeros;
  }

  tarifa() {
    return 2950;
  }

  reporte() {
    return "Placa: " + this.placa +
      " - Pasajeros: " + this.pasajeros +
      " - Tarifa: $" + this.tarifa();
  }
}


class Alimentador extends Vehiculo {
  tarifa() {
    return 0;
  }
}

// Clase hija BusDual
class BusDual extends Vehiculo {
  constructor(placa, pasajeros, esElectrico) {
    super(placa, pasajeros);
    this.esElectrico = esElectrico;
  }

  tarifa() {
    if (this.esElectrico) {
      return 2500;
    }

    return 3200;
  }
}

// Crear los vehículos
let vehiculo1 = new Vehiculo(
  "IDY313",
  20
);

let alimentador1 = new Alimentador(
  "HVL326",
  35
);

let busDual1 = new BusDual(
  "BOG981",
  40,
  true
);


let flota = [
  vehiculo1,
  alimentador1,
  busDual1
];


for (let vehiculo of flota) {
  console.log(vehiculo.reporte());
}