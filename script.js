function mostrarCodigoDonar() {
    var selectElement = document.getElementById("00N8b00000IbUEO");
    var codigoDonarDiv = document.getElementById("codigoDonar");
    var codigoDonar = `
      <div class="col-12">
        <h3>¿Qué quieres donar?</h3>
        <select id="00N8b00000IbgzW" name="00N8b00000IbgzW" title="Que queres donar?" class="form-select">
          <option value="">Seleccione una opción...</option>
          <option value="Dinero">Dinero</option>
          <option value="Ropa">Ropa</option>
          <option value="Alimentos">Alimentos</option>
          <option value="Productos de higiene/limpieza">Productos de higiene/limpieza</option>
          <option value="Colchones">Colchones</option>
        </select>
      </div>`;
    if (selectElement.value === "Quiero donar!") {
      codigoDonarDiv.innerHTML = codigoDonar;
    } else {
      codigoDonarDiv.innerHTML = "";
    }
  }

  var selectElement = document.getElementById("00N8b00000IbUEO");
  selectElement.addEventListener("change", mostrarCodigoDonar);

  document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
      var select = document.getElementById('00N8b00000IbgzW');
      if (select.value === 'Dinero') {
        window.open('dinero.html', '_blank');
      }
      if (select.value === 'Ropa') {
        window.open('mapa.html', '_blank');
      }
      if (select.value === 'Alimentos') {
        window.open('mapa.html', '_blank');
      }
      if (select.value === 'Productos de higiene/limpieza') {
        window.open('mapa.html', '_blank');
      }
      if (select.value === 'Colchones') {
        window.open('mapa.html', '_blank');
      }
    });
  });

