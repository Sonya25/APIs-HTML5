window.onload = function()
{

if (window.File && window.FileReader && window.FileList) {   
    console.log('Todas las APIs soportadas');
} else {
    alert('La API de FILE no es soportada en este navegador.');
}
//Función para manejar el archivo de video local
function handleFileSelect(e) {
    var file = e.target.files[0]; //archivo subido
    var reader = new FileReader();
    
    reader.onload = function (e) {
        alert('Cargando el video'); 
      var src = document.createAttribute('src');
      src.value = e.target.result;
      video.setAttributeNode(src); //añade atributo src
      mensaje.innerHTML = '<p>Cargando...</p>';
    }}
}