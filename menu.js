document.addEventListener("DOMContentLoaded", function () {
  const menuHamburguesa = document.querySelector(
    ".menu_hamburguesa .hamburguesa"
  );
  const menuDesplegable = document.querySelector(".menu_desplegable");

  // Función para abrir/cerrar el menú hamburguesa
  menuHamburguesa.addEventListener("click", function () {
    menuDesplegable.classList.toggle("activo");
  });

  // Función cierre del menú automático
  function cerrarMenuEnPantallaGrande() {
    if (window.innerWidth > 1100) {
      menuDesplegable.classList.remove("activo");
    }
  }

  cerrarMenuEnPantallaGrande();

  window.addEventListener("resize", cerrarMenuEnPantallaGrande);
});
