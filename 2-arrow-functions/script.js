const upperName = (name) => name.toUpperCase();

class Menu {
  constructor(menu) {
    this.menuElement = document.querySelector(menu);
    this.activeClass = "active"
  }
  addActiveElement() {
    this.menuElement.addEventListener("click", (event) => {
      console.log(this)
      event.target.classList.add(this.activeClass);
    });
  }
}

const menu = new Menu(".principal");
menu.addActiveElement();