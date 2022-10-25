const fruits = [{ name: "Orange", image: "./images/orange.jpg" }, { name: "Kiwi", image: "./images/kiwi.jpg" }, { name: "Banane", image: "./images/banane.jpg" }, { name: "Peche", image: "./images/peche.jpg" }, { name: "Cerise", image: "./images/cerise.jpg" }];
const photo = document.getElementById("photoBlock");

for (let i = 0; i < fruits.length; i++) {
    let maDiv = document.getElementById("container_fruit");
    let laDivFruit = document.createElement("div");
    laDivFruit.classList.add("rectangle");
    maDiv.appendChild(laDivFruit);
    let monTitre = document.createElement("h1");
    monTitre.setAttribute("id", fruits[i].name)
    monTitre.textContent = fruits[i].name;
    laDivFruit.appendChild(monTitre);
}

fruits.forEach(fruit => {

    const monFruit = document.getElementById(fruit.name);
    monFruit.addEventListener("click", event => {
        photo.style.backgroundImage = `url(${fruit.image})`
    });
});

