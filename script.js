// Mostrar la sección elegida (Sirve para PC y Celular)
function mostrarSeccion(idSeccion) {
    document.getElementById('informacion').classList.add('oculto');
    document.getElementById('casino').classList.add('oculto');
    document.getElementById('loteria').classList.add('oculto');

    document.getElementById(idSeccion).classList.remove('oculto');
}

// Abrir y cerrar el menú desplegable en el celular
function toggleMenuMobile() {
    const dropdown = document.getElementById('dropdown-mobile');
    const flecha = document.getElementById('flecha-mobile');

    dropdown.classList.toggle('oculto');

    if (dropdown.classList.contains('oculto')) {
        flecha.textContent = '▼';
    } else {
        flecha.textContent = '▲';
    }
}

// Cambiar de opción desde el menú de celular y cerrarlo
function seleccionarOpcionMobile(idSeccion) {
    mostrarSeccion(idSeccion);
    toggleMenuMobile();
}

// Cierra el menú desplegable si haces clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('.btn-menu-mobile') && !event.target.matches('#flecha-mobile')) {
        const dropdown = document.getElementById('dropdown-mobile');
        if (dropdown && !dropdown.classList.contains('oculto')) {
            dropdown.classList.add('oculto');
            document.getElementById('flecha-mobile').textContent = '▼';
        }
    }
}