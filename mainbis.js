const fruits = [{ name: "Orange", image: "./images/orange.jpg" }, { name: "Kiwi", image: "./images/kiwi.jpg" }, { name: "Banane", image: "./images/banane.jpg" }, { name: "Peche", image: "./images/peche.jpg" }, { name: "Cerise", image: "./images/cerise.jpg" }];
const photo = document.getElementById("photoBlock");

fruits.forEach(fruit => { 
    let maDiv = document.getElementById("container_fruit");
    let laDivFruit = document.createElement("div");
    laDivFruit.classList.add("rectangle");
    maDiv.appendChild(laDivFruit);
    let monTitre = document.createElement("h1");
    laDivFruit.setAttribute("id", fruit.name)
    monTitre.textContent = fruit.name;
    laDivFruit.appendChild(monTitre);
    const monFruit = document.getElementById(fruit.name);
    monFruit.addEventListener("click", event => {
        photo.style.backgroundImage = `url(${fruit.image})`
        monFruit.style.backgroundColor = "#339933";                
    });    
});