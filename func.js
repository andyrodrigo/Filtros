
const matriz = document.getElementById("matriz");

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



function criarMatriz( linhas , colunas){

    elemento = new Array(linhas);
    elementoValor = new Array(linhas);

    //Cria cada elemento da matriz e a insere
    for( i=1 ; i <= linhas ; i++){

        elemento[i] = document.createElement("TR");
        elementoValor[i] = new Array(colunas);
        matriz.appendChild( elemento[i] )
     
        for( j=1 ; j <= colunas ; j++){
            elementoValor[i][j] = document.createElement("input");
            elementoValor[i][j].type = "number";
            elementoValor[i][j].id = i + "x" + j;
            elementoValor[i][j].value = i+j;
            elementoValor[i][j].min = -99;
            elementoValor[i][j].max = 99;
            elementoValor[i][j].classList.add( "campoNumerico" );

            elemento[i][j] = document.createElement("TD");
            elemento[i][j].appendChild( elementoValor[i][j] );
            elemento[i].appendChild( elemento[i][j] );  
        }
    }
}

function montarFiltros(){
    
}
