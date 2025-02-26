document.getElementById('dreamForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita la recarga de la página
  
    // Obtener los valores ingresados
    const nombre = document.getElementById('nombre').value;
    const genero = document.getElementById('genero').value;
    const sueno = document.getElementById('sueno').value;
  
    // Insertar los datos en la vista del certificado
    document.getElementById('cert-nombre').innerText = nombre;
    document.getElementById('cert-genero').innerText = genero;
    document.getElementById('cert-sueno').innerText = sueno;
  
    // Ocultar el formulario y mostrar el certificado
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('certificate-container').style.display = 'block';
  });