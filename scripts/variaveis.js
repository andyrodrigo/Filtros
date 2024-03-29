//controles da tela:
const imagemSecreta = document.getElementById("imagemSecreta");
const canvas = document.getElementById("canvasOutput");
const telaDeImagem = document.getElementById("telaDeImagem");
const imagemFundo = document.getElementById("imagemFundo");
const imagemFrente = document.getElementById("imagemFrente");
const controleH = document.getElementById("controleH");
const controleV = document.getElementById("controleV");
const controleTamanhoMatriz = document.getElementById("controleTamanhoMatriz");
const matriz = document.getElementById("matriz");
const select_operador = document.getElementById("select_operador");
const bto_operacao = document.getElementById("bto_operacao");
const entrada_sigma = document.getElementById("entrada_sigma");
const bto_normalizar = document.getElementById("bto_normalizar");
const entradaImagem = document.getElementById("minhaImagem");
const bto_baixar = document.getElementById("baixar");
const colorido = document.getElementById("colorido");
const pretoBranco = document.getElementById("pretoBranco");

//botões da navegação
const home = document.getElementById("home");
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");
const link5 = document.getElementById("link5");

//botões de Filtros
const bto_filtro_media = document.getElementById("bto_filtro_media");
const bto_filtro_desfocar = document.getElementById("bto_filtro_desfocar");
const bto_filtro_agucar = document.getElementById("bto_filtro_agucar");
//const bto_filtro_boost = document.getElementById("bto_filtro_boost");
const bto_filtro_relevo = document.getElementById("bto_filtro_relevo");
const bto_filtro_horizontal = document.getElementById("bto_filtro_horizontal");
const bto_filtro_vertical = document.getElementById("bto_filtro_vertical");
const bto_filtro_laplaciana = document.getElementById("bto_filtro_laplaciana");
const bto_filtro_gaussiana = document.getElementById("bto_filtro_gaussiana");
const bto_filtro_detectorBordas = document.getElementById(
  "bto_filtro_detectorBordas"
);
const bto_filtro_laplacianaGaussiana = document.getElementById(
  "bto_filtro_laplacianaGaussiana"
);

//telas
const ferramenta = document.getElementById("ferramenta");
const info1 = document.getElementById("info1");
const info2 = document.getElementById("info2");
const info3 = document.getElementById("info3");
const info4 = document.getElementById("info4");
const info5 = document.getElementById("info5");

const opcoesOperador = {
  multiplicador: (valor, sigma) => valor * sigma,
  divisor: (valor, sigma) => valor / sigma,
  fator: (valor, sigma) => valor + sigma,
  subtrator: (valor, sigma) => valor - sigma,
};

let elemento;
let elementoValor;
let matrizMemoria = [];

let telaAtual;
let tamanhoMatrizAtual;

// const mascarasJson = 'filtros.json';
// const mascaras = JSON.parse(mascarasJson);

const mascaras = [
  {
    "filtro": "media",
    "3": [0.1111,0.1111,0.1111, 0.1111,0.1111,0.1111, 0.1111,0.1111,0.1111],
    "3c": [0.1111,0.1111,0.1111, 0.1111,0.1111,0.1111, 0.1111,0.1111,0.1111],
    "5": [0.04,0.04,0.04,0.04,0.04, 0.04,0.04,0.04,0.04,0.04, 0.04,0.04,0.04,0.04,0.04, 0.04,0.04,0.04,0.04,0.04, 0.04,0.04,0.04,0.04,0.04],
        "5c": [0.04,0.04,0.04,0.04,0.04, 0.04,0.04,0.04,0.04,0.04, 0.04,0.04,0.04,0.04,0.04, 0.04,0.04,0.04,0.04,0.04, 0.04,0.04,0.04,0.04,0.04],
    "7": [0.0204,0.0204,0.0204,0.0204,0.0204,0.0204,0.0204, 0.0204,0.0204,0.0204,0.0204,0.0204,0.0204,0.0204, 0.0204,0.0204,0.0204,0.0204,0.0204,0.0204,0.0204, 0.0204,0.0204,0.0204,0.0204,0.0204,0.0204,0.0204, 0.0204,0.0204,0.0204,0.0204,0.0204,0.0204,0.0204, 0.0204,0.0204,0.0204,0.0204,0.0204,0.0204,0.0204, 0.0204,0.0204,0.0204,0.0204,0.0204,0.0204,0.0204],
        "7c": [0.0204,0.0204,0.0204,0.0204,0.0204,0.0204,0.0204, 0.0204,0.0204,0.0204,0.0204,0.0204,0.0204,0.0204, 0.0204,0.0204,0.0204,0.0204,0.0204,0.0204,0.0204, 0.0204,0.0204,0.0204,0.0204,0.0204,0.0204,0.0204, 0.0204,0.0204,0.0204,0.0204,0.0204,0.0204,0.0204, 0.0204,0.0204,0.0204,0.0204,0.0204,0.0204,0.0204, 0.0204,0.0204,0.0204,0.0204,0.0204,0.0204,0.0204]
  },
  {
    "filtro": "relevo",
    "3": [-2,-1,0, -1,1,1, 0,1,2],
    "3c": [-2,-1,0, -1,1,1, 0,1,2],
    "5": [0,0,0,0,0, 0,-2,-1,0,0, 0,-1,1,1,0, 0,0,1,2,0, 0,0,0,0,0],
    "5c": [0,0,0,0,0, 0,-2,-1,0,0, 0,-1,1,1,0, 0,0,1,2,0, 0,0,0,0,0],
    "7": [0,0,0,0,0,0,0, 0,0,0,0,0,0,0, 0,0,-2,-1,0,0,0, 0,0,-1,1,1,0,0, 0,0,1,2,0,0,0, 0,0,0,0,0,0,0, 0,0,0,0,0,0,0],
    "7c": [0,0,0,0,0,0,0, 0,0,0,0,0,0,0, 0,0,-2,-1,0,0,0, 0,0,-1,1,1,0,0, 0,0,1,2,0,0,0, 0,0,0,0,0,0,0, 0,0,0,0,0,0,0]
  },
  {
    "filtro": "desfocamento",
    "3": [0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25],
    "3c": [0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25],
    "5": [0,0,0,0,0,  0,0.25,0.25,0.25,0, 0,0.25,0.25,0.25,0, 0,0.25,0.25,0.25,0, 0,0,0,0,0],
    "5c": [0,0,0,0,0,  0,0.25,0.25,0.25,0, 0,0.25,0.25,0.25,0, 0,0.25,0.25,0.25,0, 0,0,0,0,0],
    "7": [0,0,0,0,0,0,0, 0,0,0,0,0,0,0, 0,0,0.25,0.25,0.25,0,0, 0,0,0.25,0.25,0.25,0,0, 0,0,0.25,0.25,0.25,0,0, 0,0,0,0,0,0,0, 0,0,0,0,0,0,0],
    "7c": [0,0,0,0,0,0,0, 0,0,0,0,0,0,0, 0,0,0.25,0.25,0.25,0,0, 0,0,0.25,0.25,0.25,0,0, 0,0,0.25,0.25,0.25,0,0, 0,0,0,0,0,0,0, 0,0,0,0,0,0,0]
  },
  {
    "filtro": "aguçamento",
    "3": [-1,-1,-1, -1,9,-1, -1,-1,-1],
    "5": [0,0,0,0,0,  0,-1,-1,-1,0, 0,-1,9,-1,0, 0,-1,-1,-1,0, 0,0,0,0,0],
    "7": [0,0,0,0,0,0,0, 0,0,0,0,0,0,0, 0,0,-1,-1,-1,0,0, 0,0,-1,9,-1,0,0, 0,0,-1,-1,-1,0,0, 0,0,0,0,0,0,0, 0,0,0,0,0,0,0],
    "3c": [-1,-1,-1, -1,9,-1, -1,-1,-1],
    "5c": [0,0,0,0,0,  0,-1,-1,-1,0, 0,-1,9,-1,0, 0,-1,-1,-1,0, 0,0,0,0,0],
    "7c": [0,0,0,0,0,0,0, 0,0,0,0,0,0,0, 0,0,-1,-1,-1,0,0, 0,0,-1,9,-1,0,0, 0,0,-1,-1,-1,0,0, 0,0,0,0,0,0,0, 0,0,0,0,0,0,0],
  },
  {
    "filtro": "boost",
    "3": [0,-1,0, -1,5.2,-1, 0,-1,0],
    "5": [0,0,0,0,0,  0,-1,-1,-1,0, 0,-1,5.2,-1,0, 0,-1,-1,-1,0, 0,0,0,0,0],
    "7": [0,0,0,0,0,0,0, 0,0,0,0,0,0,0, 0,0,-1,-1,-1,0,0, 0,0,-1,5.2,-1,0,0, 0,0,-1,-1,-1,0,0, 0,0,0,0,0,0,0, 0,0,0,0,0,0,0],
    "3c": [0,-1,0, -1,5.2,-1, 0,-1,0],
    "5c": [0,0,0,0,0,  0,-1,-1,-1,0, 0,-1,5.2,-1,0, 0,-1,-1,-1,0, 0,0,0,0,0],
    "7c": [0,0,0,0,0,0,0, 0,0,0,0,0,0,0, 0,0,-1,-1,-1,0,0, 0,0,-1,5.2,-1,0,0, 0,0,-1,-1,-1,0,0, 0,0,0,0,0,0,0, 0,0,0,0,0,0,0]
  },
  {
    "filtro": "horizontal",
    "3": [-1,0,1, -2,0,2, -1,0,1],
    "3c": [-1,0,1, -2,1,2, -1,0,1],
    "5": [-2,-1,0,1,2, -2,-1,0,1,2, -4,-2,0,2,4, -2,-1,0,1,2, -2,-1,0,1,2],
    "5c": [-2,-1,0,1,2, -2,-1,0.5,1,2, -4,-2,0,2,4, -2,-1,0,1,2, -2,-1,0,1,2],
    "7": [-2,-1,-1,0,1,1,2, -2,-1,-1,0,1,1,2, -4,-2,-1,0,1,2,4, -4,-2,-1,0,1,2,4, -8,-4,-2,0,2,4,8, -2,-1,-1,0,1,1,2, -2,-1,-1,0,1,1,2],
    "7c": [-2,-1,-1,0,1,1,2, -2,-1,-1,0,1,1,2, -4,-2,-1,0,1,2,4, -4,-2,-1,1,1,2,4, -8,-4,-2,0,2,4,8, -2,-1,-1,0,1,1,2, -2,-1,-1,0,1,1,2]
  },
  {
    "filtro": "vertical",
    "3": [-1,-2,-1, 0,0,0, 1,2,1],
    "3c": [-1,-2,-1, 0,1,0, 1,2,1],
    "5": [-2,-2,-4,-2,-2, -1,-1,-2,-1,-1, 0,0,0,0,0, 1,1,2,1,1, 2,2,4,2,2],
    "5c": [-2,-2,-4,-2,-2, -1,-1,-2,-1,-1, 0,0,0.5,0,0, 1,1,2,1,1, 2,2,4,2,2],
    "7": [-2,-2,-4,-8,-4,-2,-2, -1,-1,-2,-4,-2,-1,-1, -1,-1,-1,-2,-1,-1,-1, 0,0,0,0,0,0,0, 1,1,1,2,1,1,1, 1,1,2,4,2,1,1, 2,2,4,8,4,2,2],
     "7c": [-2,-2,-4,-8,-4,-2,-2, -1,-1,-2,-4,-2,-1,-1, -1,-1,-1,-2,-1,-1,-1, 0,0,0,1,0,0,0, 1,1,1,2,1,1,1, 1,1,2,4,2,1,1, 2,2,4,8,4,2,2]
  },
  {
    "filtro": "detectorDeBordas",
    "3": [-1,-1,-1,  -1,8,-1, -1,-1,-1 ],
    "3c": [-1,-1,-1,  -1,8.5,-1, -1,-1,-1 ],
    "5": [-1,-1,-1,-1,-1, -1,-1,1,-1,-1, -1,1,15,1,-1, -1,-1,1,-1,-1, -1,-1,-1,-1,-1],
    "5c": [-1,-1,-1,-1,-1, -1,-1,1,-1,-1, -1,1,17,1,-1, -1,-1,1,-1,-1, -1,-1,-1,-1,-1],
    "7": [-1,-1,-1,-1,-1,-1,-1, -1,-1,0,-1,-1,-1,-1, -1,-1,-1,4,-1,-1,-1, -1, 0, 4,20,4, 0,-1, -1,-1,-1,4,-1,-1,-1, -1,-1,-1,0,-1,-1,-1, -1,-1,-1,-1,-1,-1,-1],
    "7c": [-1,-1,-1,-1,-1,-1,-1, -1,-1,0,-1,-1,-1,-1, -1,-1,-1,4,-1,-1,-1, -1, 0, 4,25,4, 0,-1, -1,-1,-1,4,-1,-1,-1, -1,-1,-1,0,-1,-1,-1, -1,-1,-1,-1,-1,-1,-1]
  },
  {
    "filtro": "laplaciana",
    "3": [0,-1,0, -1,4,-1, 0,-1,0],
    "3c": [0,-1,0, -1,4.5,-1, 0,-1,0],
    "5": [-1,-1,-1,-1,-1, -1,-1,-1,-1,-1, -1,-1,24,-1,-1, -1,-1,-1,-1,-1, -1,-1,-1,-1,-1],
    "5c": [-1,-1,-1,-1,-1, -1,-1,-1,-1,-1, -1,-1,25,-1,-1, -1,-1,-1,-1,-1, -1,-1,-1,-1,-1],
    "7": [-1,-1,-1,-1,-1,-1,-1, -1,-1,-1,-1,-1,-1,-1, -1,-1,-1,8,-1,-1,-1, -1,-1,8,10,8,-1,-1, -1,-1,-1,8,-1,-1,-1, -1,-1,-1,-1,-1,-1,-1, -1,-1,-1,-1,-1,-1,-1],
    "7c": [-1,-1,-1,-1,-1,-1,-1, -1,-1,-1,-1,-1,-1,-1, -1,-1,-1,8,-1,-1,-1, -1,-1,8,13,8,-1,-1, -1,-1,-1,8,-1,-1,-1, -1,-1,-1,-1,-1,-1,-1, -1,-1,-1,-1,-1,-1,-1]
  },
  {
    "filtro": "gaussiana",
    "3": [0.0625,0.125,0.0625, 0.125,0.25,0.125,  0.0625,0.125, 0.0625],
    "5": [0.00366,0.01465,0.0256,0.01465,0.00366, 0.01465,0.0586,0.0952,0.0586,0.01465, 0.0256,0.0952,0.15,0.0952,0.0256, 0.01465,0.0586,0.0952,0.0586,0.01465, 0.00366,0.01465,0.0256,0.01465,0.00366],
    "7": [0,0.0009765625,0.00390625,0.0048828125,0.00390625,0.0009765625,0, 0.0009765625,0.0087890625,0.0224609375,0.0283203125,0.0224609375,0.0087890625,0.0009765625, 0.00390625,0.0224609375,0.0595703125,0.076171875,0.0595703125,0.0224609375,0.00390625, 0.0048828125,0.0283203125,0.076171875,0.09765625,0.076171875,0.0283203125,0.0048828125, 0.00390625,0.0224609375,0.0595703125,0.076171875,0.0595703125,0.0224609375,0.00390625, 0.0009765625,0.0087890625,0.0224609375,0.0283203125,0.0224609375,0.0087890625,0.0009765625, 0,0.0009765625,0.00390625,0.0048828125,0.00390625,0.0009765625,0],
    "3c": [0.0625,0.125,0.0625, 0.125,0.25,0.125,  0.0625,0.125, 0.0625],
    "5c": [0.00366,0.01465,0.0256,0.01465,0.00366, 0.01465,0.0586,0.0952,0.0586,0.01465, 0.0256,0.0952,0.15,0.0952,0.0256, 0.01465,0.0586,0.0952,0.0586,0.01465, 0.00366,0.01465,0.0256,0.01465,0.00366],
    "7c": [0,0.0009765625,0.00390625,0.0048828125,0.00390625,0.0009765625,0, 0.0009765625,0.0087890625,0.0224609375,0.0283203125,0.0224609375,0.0087890625,0.0009765625, 0.00390625,0.0224609375,0.0595703125,0.076171875,0.0595703125,0.0224609375,0.00390625, 0.0048828125,0.0283203125,0.076171875,0.09765625,0.076171875,0.0283203125,0.0048828125, 0.00390625,0.0224609375,0.0595703125,0.076171875,0.0595703125,0.0224609375,0.00390625, 0.0009765625,0.0087890625,0.0224609375,0.0283203125,0.0224609375,0.0087890625,0.0009765625, 0,0.0009765625,0.00390625,0.0048828125,0.00390625,0.0009765625,0]
  },
  {
    "filtro": "laplacianaGaussiana",
    "3": [1,2,1, 2,-11,2, 1,2,1],
    "5": [0,0,1,0,0, 0,1,2,1,0, 1,2,-16,2,1, 0,1,2,1,0, 0,0,1,0,0 ],
    "7": [0,0,0,0,0,0,0, 0,0,0,1,0,0,0, 0,0,1,2,1,0,0, 0,1,2,-16,2,1,0, 0,0,1,2,1,0,0, 0,0,0,1,0,0,0, 0,0,0,0,0,0,0],
    "3c": [1,2,1, 2,-11,2, 1,2,1],
    "5c": [0,0,1,0,0, 0,1,2,1,0, 1,2,-15,2,1, 0,1,2,1,0, 0,0,1,0,0 ],
    "7c": [0,0,0,0,0,0,0, 0,0,0,1,0,0,0, 0,0,1,2,1,0,0, 0,1,2,-15,2,1,0, 0,0,1,2,1,0,0, 0,0,0,1,0,0,0, 0,0,0,0,0,0,0]
  },

]
