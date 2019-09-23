$(document).ready(
	function ()
	{
        $("#fondo").fadeIn(5000);
        $("#tituloh4").bind("click",mostrarOcultarTitulo);
	}
);

function mostrarOcultarTitulo(){
    $("#TituloIndex").fadeToggle();
}