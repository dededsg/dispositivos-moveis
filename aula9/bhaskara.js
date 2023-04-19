
function bhaskara(a, b, c) {
  const delta =( b * b) - 4 * a * c;
  if (delta < 0) {
    return "A equação não possui raízes reais.";
  }
  const x1 = (-b + Math.sqrt(delta)) / (2 * a);
  const x2 = (-b - Math.sqrt(delta)) / (2 * a);
  return `Delta: ${delta.toFixed(2)}. Raízes: x' = ${x1.toFixed(
    2
  )}, x'' = ${x2.toFixed(2)}.`;
}
console.log(bhaskara(2, 4, 2));
