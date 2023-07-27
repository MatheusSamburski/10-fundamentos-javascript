const req = fetch("https://api.github.com/users/MatheusSamburski/repos")
  .then((response) => {
    response.json();
  })
  .then((json) => {
    document.querySelector(".app").innerHTML = json[0];
  });
