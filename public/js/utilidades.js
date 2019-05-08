function SliderToggleId(){ //Recibe string del id del elemento para invertir su visibilidad
    if(arguments.length == 0 ) return "Se necesita al menos un id";
    for (let i = 0; i < arguments.length; i++) {
		$(`#${arguments[i]}`).slideToggle(500);
	}
}
function SliderToggleClass(){ // Recibe un string de la clase del elemento para invertir su visibilidad
    if(arguments.length == 0 ) return "Se necesita al menos una clase";
    for (let i = 0; i < arguments.length; i++) {
    $(`.${arguments[i]}`).slideToggle(500);
    var hola = document.querySelector('#hola');
    hola = $('#hola');
	}
}

function HideAndShow(padre, mostrar){
  var arreglo = []
  padre.children().each(function () {
    arreglo.push($(this).text()) // "this" is the current element in the loop
  });
  
  arreglo.forEach(function (hola){

    if ($(`#${hola}`).is(':visible') && hola !== mostrar) {
      //console.log( mostrar);
      ($(`#${hola}`).slideUp(500))
    } 
  })

  $(`#${mostrar}`).slideDown(500);
  //console.log(arreglo)

  //mostrar.slideDown(500)

 
}

function getSelectBtn(){
  return $(".radius-like-on").text()
}


$(function() {    
  var boton = $(".radius-like")
  var btn = $('#seccion-btn');
  var busquedaDinamica = $("#busqueda-dinamica");
  busquedaDinamica.prop('disabled', true);
  let active = 'radius-like-on';
  
  var tablas = $("#main-list")
  boton.click(function() {  //use a class, since your ID gets mangled
   
    if($(this).hasClass(active)){ // Si el boton seleccionado ya tiene la misma clase...

      $(tablas).children().slideDown(500) // muestra todas las tablas
      $(this).removeClass(active)  //Quita la clase del boton seleccionado
      busquedaDinamica.prop('disabled', true); // Si no hay ningun activo, desactiva la barra de busqueda
    }
    else{

      $(boton).removeClass(active) // Remueve la clase de todos los botones
      busquedaDinamica.prop('disabled', false); // Activa la barra de busqueda

      $(this).addClass(active) //Le añade la clase activa al boton seleccionado


      var text = $('.radius-like-on').text();

      
      //$(tablas).children().not(`#${text}`).slideUp(500)
   
      HideAndShow(btn, text) //
  

    }
    
    busquedaDinamica.val('')
    busquedaDinamica.trigger( "change" );
    //$(this).css("background-color", "yellow");      //add the class to the clicked element
  });
});


$(function(){
  
  $('#main-list tbody').on('click', 'tr', function(){
    var tableData = $(this).children('td').map(function(){
      return $(this).text()
    })
    console.log($(this).closest('div').attr('id'))

    alert(tableData)
    console.log(tableData)
  })

  
})







$(function(){
  $("#add").click(function() {
    let seccion =  getSelectBtn();
    SliderToggleId(`${seccion}`);
    seccion = seccion.toLowerCase()
    SliderToggleId(`${seccion}-add`);
  })

  $('#cancelar').click(function(){
    var active = 'radius-like-on';
    let mainList = $('#main-list')
    var boton = $(".radius-like")
    let seccion =  getSelectBtn();
    SliderToggleId(seccion);
    seccion = seccion.toLowerCase();
    SliderToggleId(`${seccion}-add`);
    console.log(seccion)
    
    
  })

})