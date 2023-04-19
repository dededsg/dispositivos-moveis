let categoria;
let premio;
let num1 = 45;

function calcularPremio(idade) {
  if (idade <= 16) {
    categoria = "Juvenil";
    premio = 10 * idade;
  } else if (idade >= 17 && idade <= 24) {
    categoria = "Junior";
    premio = 8 * idade;
  } else if (idade >= 25 && idade <= 45) {
    categoria = "Adulto I";
    premio = 6 * idade;
  } else if (idade >= 46 && idade <= 55) {
    categoria = "Adulto II";
    premio = 5 * idade;
  } else {
    categoria = "Master";
    premio = 4 * idade;
  }
}
calcularPremio(num1);
console.log(`Categoria: ${categoria} Prêmio: R$${premio}`);
