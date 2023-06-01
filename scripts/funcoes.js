function rolarHorizontalmente() {
  imagemFrente.style.width = `${controleH.value}%`;
}
function rolarVerticalmente() {
  let num = String(100 - Number(controleV.value));
  imagemFrente.style.height = `${num}%`;
}

function criarMatriz(linhas, colunas) {
  matriz.innerHTML = "";
  elemento = new Array(linhas);
  elementoValor = new Array(linhas);

  //Cria cada elemento da matriz e a insere
  for (let i = 1; i <= linhas; i++) {
    elemento[i] = document.createElement("TR");
    elementoValor[i] = new Array(colunas);
    matriz.appendChild(elemento[i]);

    for (let j = 1; j <= colunas; j++) {
      elementoValor[i][j] = document.createElement("input");
      elementoValor[i][j].type = "number";
      elementoValor[i][j].id = i + "x" + j;
      elementoValor[i][j].value = matrizMemoria[i][j];
      elementoValor[i][j].min = -99;
      elementoValor[i][j].max = 99;
      elementoValor[i][j].classList.add("campoNumerico");

      elemento[i][j] = document.createElement("TD");
      elemento[i][j].appendChild(elementoValor[i][j]);
      elemento[i].appendChild(elemento[i][j]);
    }
  }
}

function preencherMatrizMemoria() {
  matrizMemoria = [];
  for (let i = 1; i <= 7; i++) {
    matrizMemoria[i] = [];
    for (let j = 1; j <= 7; j++) {
      if (i === 2 && j === 2) {
        matrizMemoria[i][j] = 1;
      } else {
        matrizMemoria[i][j] = 0;
      }
    }
  }
}

function gravarNaMatrizMemoria(novoTamanho) {
  let tamanho;
  let add = 0;
  let remo = 0;
  zerarMatrizMemoria(novoTamanho);
  if (novoTamanho > tamanhoMatrizAtual) {
    tamanho = tamanhoMatrizAtual;
    add = (novoTamanho - tamanhoMatrizAtual) / 2;
  } else {
    tamanho = novoTamanho;
    remo = (tamanhoMatrizAtual - novoTamanho) / 2;
  }
  for (let i = 1; i <= tamanho; i++) {
    for (let j = 1; j <= tamanho; j++) {
      matrizMemoria[i + add][j + add] =
        elemento[i + remo][j + remo].querySelector("input").value;
    }
  }
}

function zerarMatrizMemoria(tamanho) {
  for (let i = 1; i <= tamanho; i++) {
    matrizMemoria[i] = [];
    for (let j = 1; j <= tamanho; j++) {
      matrizMemoria[i][j] = 0;
    }
  }
}

function mudarTamanhoMatriz() {
  let tam = Number(controleTamanhoMatriz.value);
  gravarNaMatrizMemoria(tam);
  criarMatriz(tam, tam);
  tamanhoMatrizAtual = tam;
}

function montarFiltros() {}

function escutadores() {
  controleH.addEventListener("input", rolarHorizontalmente);
  controleV.addEventListener("input", rolarVerticalmente);
  controleTamanhoMatriz.addEventListener("change", mudarTamanhoMatriz);
}

function iniciar() {
  tamanhoMatrizAtual = 3;
  preencherMatrizMemoria();
}

//inicialização
window.addEventListener("load", escutadores);
window.addEventListener("load", () => {
  criarMatriz(3, 3);
});
window.addEventListener("load", montarFiltros());
iniciar();
