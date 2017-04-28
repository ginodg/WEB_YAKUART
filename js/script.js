/******     JS PAG. GALERIA/PROYECTO    *****/
/* Permite generar una ventana del tipo MODAL para cargar en mayor tamño la foto seleccionada */
$(window).load(function(){
	//alert("loaded");
	$('img').on('click',function(){ // Al hacer click en la imagen
		var src=$(this).attr('src'); // Como el evento se di oen la imagen entonces el "this" hace referencia a dicho 
									// item y capturamos su dirección url (src) donde se encuentra la imagen en la 
									// capturamos en la var src
		console.log(src);
		$("#img-proyectos").attr('src', src); // seleccionamos el item de la pagina proyectos.html div del tipo modal
												// y le asiganmos la direccion url de la imagen a cargar contenida en la var SRC 
		$("#galeria-modal").modal('show'); //seleccionamos le item galeria-modal y la mostramos.
	});
});

/******   JS PAG. CONTACTO   *******/

$('#contact-form').submit(function(e) {
	
	var nombre = document.getElementById('NameText');
	var	email = document.getElementById('InputEmail');
	var	titulo = document.getElementById('SubjectText');
	var	mensaje = document.getElementById('TextMessage');
	
	if(!nombre.value || !email.value || !titulo.value || !mensaje.value) {
		//alert('Por favor verifique los campos a llenar');
		sweetAlert("Oops...", "Algo salió mal! Por favor, verifique los campos a llenar.", "error");
		e.preventDefault(); //Permite que no se refresque la pagina
	} else {
		$.ajax({
		    url: "https://formspree.io/ginodg83@gmail.com", 
		    method: "POST",
		    data: {"Nombre:" : nombre.value, "Email:" : email.value, "Titulo:" : titulo.value, "Mensaje:" : mensaje.value },
		    dataType: "json"
		});
		e.preventDefault(); //Permite que no se refresque la pagina
		$(this).get(0).reset(); //Permite limpiar los datos ingresados
		//alert("Mensage Enviado!");
		swal("Gracias por Contactarnos!", "El mensaje ha sido enviado, dentro de poco te responderemos!", "success");
	}
})

/**********    FUNCION PARA QUE AL ABRIR EL MENU EN VENTANA SMALL al hacer click fuera se esconda   *********/

$(function () {

	$(".navbar-toggle").blur(function (event) { //Se seleecion mediante la clase
		var screenWidth = window.innerWidth;
		console.log(screenWidth);
		if (screenWidth < 768) {
			$("#navbarMenu").collapse('hide'); // se selecciona mediante el ID
		}
	});
});

/***********************************/