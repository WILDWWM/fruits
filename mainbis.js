const fruits = [{ name: "Orange", image: "./images/orange.jpg" }, { name: "Kiwi", image: "./images/kiwi.jpg" }, { name: "Banane", image: "./images/banane.jpg" }, { name: "Cerise", image: "./images/cerise.jpg" }];

const photo = document.getElementById("photoBlock");

fruits.forEach(fruit => {  
    const monFruit = document.getElementById(fruit.name);    
    monFruit.addEventListener("click", event => {
        photo.style.backgroundImage = `url(${fruit.image})`
    });        
});        

