function handleMouseMove(event) {
  // const clientX = event.clientX;
  // const clientY = event.clientY;

  const { clientX, clientY } = event;

  console.log(clientX, clientY);
}

// document.documentElement.addEventListener("mousemove", handleMouseMove);

const frutas = ["banana", "uva"];
const [fruta1, fruta2] = frutas;
console.log(frutas);
console.log(fruta1, fruta2);