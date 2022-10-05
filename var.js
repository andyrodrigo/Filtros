
const matriz = document.getElementById("matriz");

//const filtrosJson = 'filtros.json';
//var allFiltros = JSON.parse(filtrosJson);


let elemento;
let elementoValor;

//Escutadores---------------------------------------------------------------------------
function escutadores(){

}
//-----------------------------------------------------------------------------------------------------------------------

//inicialização
window.addEventListener("load", escutadores);
window.addEventListener("load", function(){ criarMatriz( 3 , 3 ) } );
window.addEventListener("load", montarFiltros() );
