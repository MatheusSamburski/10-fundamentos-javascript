const precos = [
  "Credito",
  "R$ 200",
  "R$ 400",
  "Contas Pagar",
  "R$ 300",
  "R$ 400",
  "Meus dados",
];

const precosFiltro = precos.filter((preco) => {
  return preco.includes("R$");
});

const precosNumeros = precosFiltro.map((preco) => {
  return preco.replace("R$ ", "");
});

const total = precosNumeros.reduce((acc, item) => {
  return acc + item;
});
