const monFruitOrange = document.getElementById("orange");
const monFruitKiwi = document.getElementById("kiwi");
const monFruitBanane = document.getElementById("banane");
const monFruitCerise = document.getElementById("cerise");
const photo = document.getElementById("photoBlock");

monFruitOrange.addEventListener("click", event => {   
   photo.style.backgroundImage = "url(./images/orange.jpg)"
})

monFruitKiwi.addEventListener("click", event => {
   photo.style.backgroundImage = "url(./images/kiwi.jpg)"
})

monFruitBanane.addEventListener("click", event => {
   photo.style.backgroundImage = "url(./images/banane.jpg)"
})

monFruitCerise.addEventListener("click", event => {
   photo.style.backgroundImage = "url(./images/cerise.jpg)"
})