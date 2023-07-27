function showList(empresa, ...clientes) {
  console.log(empresa);
  console.log(clientes);
}

showList("grendene", "matheus", "mateus", 10);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const math = Math.max(...numeros);

console.log(math);

const items = document.querySelectorAll("li");

[...items].forEach((item) => {
  console.log(item);
});

console.log(items);

const carro = { cor: "Azul", portas: 4, ano: 2020 };

const cloneCarro = { ...carro, turbo: true };

class Transporte {
  constructor() {
    this.terrestre = true;
  }
}

class Carro extends Transporte {
  constructor(cor, portas) {
    super();
    this.cor = cor;
    this.portas = portas;
  }
}

const carroClass = new Carro("vermelho", 4);

const cloneCarroClass = { ...carroClass };
