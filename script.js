document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');
  const categoriaSelect = document.getElementById('categoria-select');
  const shortcutsContainer = document.getElementById('shortcuts-container');
  const categorias = document.querySelectorAll('[class^="categoria-"]');
  const noResultados = document.createElement('p');
  noResultados.textContent = 'No se encontraron resultados';
  noResultados.style.display = 'none';
  shortcutsContainer.appendChild(noResultados);

  function filtrarCategoria() {
    const categoriaSeleccionada = categoriaSelect.value.toLowerCase();
    categorias.forEach(function (categoria) {
      const categoriaNombre = categoria.className.replace('categoria-', '').toLowerCase();
      categoria.style.display = categoriaSeleccionada === "" || categoriaNombre === categoriaSeleccionada ? 'block' : 'none';
    });
  }

  function filtrarBuscar() {
    const searchValue = searchInput.value.toLowerCase();
    let resultadosEncontrados = false;
    categorias.forEach(function (categoria) {
      const tabla = categoria.querySelector('tbody');
      const filas = tabla.rows;
      let filasVisibles = 0;
      filas.forEach(function (fila) {
        const atajo = fila.cells[0].textContent.toLowerCase();
        const descripcion = fila.cells[1].textContent.toLowerCase();
        fila.style.display = atajo.includes(searchValue) || descripcion.includes(searchValue) ? 'table-row' : 'none';
        filasVisibles += fila.style.display === 'table-row' ? 1 : 0;
      });
      categoria.style.display = filasVisibles > 0 ? 'block' : 'none';
      resultadosEncontrados = resultadosEncontrados || filasVisibles > 0;
    });
    noResultados.style.display = resultadosEncontrados ? 'none' : 'block';
  }

  searchBtn.addEventListener('click', filtrarBuscar);
  searchInput.addEventListener('input', filtrarBuscar);
  categoriaSelect.addEventListener('change', filtrarCategoria);

  categorias.forEach(function (categoria) {
    categoria.style.display = 'block';
  });
});