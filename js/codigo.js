$(document).ready(
	function ()
	{
        $("#fondo").fadeIn(5000);
        $("#tituloh4").bind("click",mostrarOcultarTitulo);
        $("#enlacetecnologia").bind("click",mostrarTecnologia);
        $("#enlacepea").bind("click",mostrarPea);
	}
);

function mostrarOcultarTitulo(){
    $("#TituloIndex").fadeToggle();
}
function mostrarTecnologia(){
    $("#planes_de_estudio").fadeOut();
    $("#tecnologia").fadeIn(2000);
}
function mostrarPea(){
    $("#planes_de_estudio").fadeOut();
    $("#tecnologia").slideDown(2000);
}