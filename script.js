let menuVisible = false;
let nav = document.getElementById("nav");

function toggleMenu() {
    if (nav.classList.contains("active")) {
        nav.classList.remove("active");
    } else {
        nav.classList.add("active");
    }
}

function seleccionar() {
    nav.classList.remove("active");
}

// Llamamos a la función cuando la página se carga
document.addEventListener("DOMContentLoaded", function() {
    efectoHabilidades();

    // También llamamos a la función cuando la ventana se desplaza
    window.addEventListener("scroll", function() {
        efectoHabilidades();
    });
});

// Función efectoHabilidades
function efectoHabilidades() {
    var skillsSection = document.getElementById("skills");
    var distanciaSkills = window.innerHeight - skillsSection.getBoundingClientRect().top;

    if (distanciaSkills >= 300) {
        // Obtener todas las habilidades
        var habilidades = document.querySelectorAll('.progreso');

        // Calcular el progreso en función de la posición de la sección
        var progreso = (distanciaSkills - 300) / 10; // Ajusta este valor según tus necesidades

        // Aplica el progreso a cada habilidad
        habilidades.forEach(function(habilidad) {
            habilidad.style.width = progreso + '%';
        });
    }
}

// Agrega event listener al elemento que activa el menú
var menuIcon = document.getElementById("menu-icon");
menuIcon.addEventListener("click", toggleMenu);

// Agrega event listener a cada elemento del menú
var menuItems = document.querySelectorAll("#nav ul li a");
menuItems.forEach(function (item) {
    item.addEventListener("click", seleccionar);
});