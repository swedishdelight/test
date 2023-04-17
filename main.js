class SerieNumerica {
  obtenerPrimo(n) {
    let contador = 0;
    let numeroActual = 2;

    while (contador < n) {
      let esPrimo = true;
      for (let i = 2; i <= Math.sqrt(numeroActual); i++) {
        if (numeroActual % i == 0) {
          esPrimo = false;
          break;
        }
      }
      if (esPrimo) {
        contador++;
        if (contador == n) {
          return numeroActual;
        }
      }
      numeroActual++;
    }
  }

  obtenerMultiploDe3(n) {
    return n * 3;
  }
}

function calcularSeries() {
    const n = parseInt(document.getElementById("n").value);
    const serieNumerica = new SerieNumerica();
  
    document.getElementById("primo").textContent = serieNumerica.obtenerPrimo(n);
    document.getElementById("multiploDe3").textContent = serieNumerica.obtenerMultiploDe3(n);
 }
  

// Pruebas unitarias para el método obtenerPrimo()
const serieNumerica = new SerieNumerica();

for (let i = 1; i <= 10; i++) {
  console.assert(
    serieNumerica.obtenerPrimo(i) == [2, 3, 5, 7, 11, 13, 17, 19, 23, 29][i - 1],
    `Error en obtenerPrimo(${i})`
  );
}

// Pruebas unitarias para el método obtenerMultiploDe3()
for (let i = 1; i <= 10; i++) {
  console.assert(
    serieNumerica.obtenerMultiploDe3(i) == i * 3,
    `Error en obtenerMultiploDe3(${i})`
  );
}

