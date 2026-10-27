console.log("Hola, mundo!");
/*
let toggleThemeBtn = document.getElementById("toggle-theme-btn");

toggleThemeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
});

function saludar(nombre="Mundo") {
    alert("Hola, " + nombre + "!");
}
saludar();
saludar("Natalia");
*/
const TOGGLE_THEME_BTN = document.getElementById("toggle-theme-btn");
const ROOT = document.documentElement;
TOGGLE_THEME_BTN.addEventListener("click", function() {
    ROOT.classList.toggle("dark-theme");
});

//alert("Hola, mundo!");

/*
Para bloques de comentarios
*/

// . propiedades de ese elemento
//las funciones se llaman con paréntesis SIN ESPACIOS