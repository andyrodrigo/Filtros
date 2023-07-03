function rolarHorizontalmente() {
  imagemFrente.style.width = `${controleH.value}%`;
}

function rolarVerticalmente() {
  let num = String(100 - Number(controleV.value));
  imagemFrente.style.height = `${num}%`;
}

function iniciar() {
  tamanhoMatrizAtual = 3;
  preencherMatrizMemoria();
  telaAtual = ferramenta;
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
      elementoValor[i][j].addEventListener("change", filtrar);

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

function gravar_MatrizMemoria(novoTamanho) {
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

function mudarTamanho_Matriz() {
  let tam = Number(controleTamanhoMatriz.value);
  gravar_MatrizMemoria(tam);
  criarMatriz(tam, tam);
  tamanhoMatrizAtual = tam;
}

function realizarOperacao_Matriz() {
  const sigma = Number(entrada_sigma.value);
  const opcao = select_operador.value;
  const operador = opcoesOperador[opcao];

  if (opcao === "divisor" && sigma === 0) {
    alert("Não existe divisão por zero! Reveja seus conceitos!");
  } else {
    for (let i = 1; i <= tamanhoMatrizAtual; i++) {
      for (let j = 1; j <= tamanhoMatrizAtual; j++) {
        const inputElement = document.getElementById(`${i}x${j}`);
        const valor = Number(inputElement.value);
        inputElement.value = operador(valor, sigma);
      }
    }
  }
  filtrar();
}

function encontrarMinMax() {
  let min = document.getElementById(`1x1`).value;
  let max = document.getElementById(`1x1`).value;
  for (let i = 1; i <= tamanhoMatrizAtual; i++) {
    for (let j = 1; j <= tamanhoMatrizAtual; j++) {
      const valor = document.getElementById(`${i}x${j}`).value;
      if (valor < min) {
        min = valor;
      }
      if (valor > max) {
        max = valor;
      }
    }
  }
  return { min, max };
}

function normalizarMatriz() {
  const { min, max } = encontrarMinMax(matriz);
  if (max - min != 0) {
    for (let i = 1; i <= tamanhoMatrizAtual; i++) {
      for (let j = 1; j <= tamanhoMatrizAtual; j++) {
        const inputElement = document.getElementById(`${i}x${j}`);
        inputElement.value = (inputElement.value - min) / (max - min);
      }
    }
  }
  filtrar();
}

function filtrar() {
  const frame = cv.imread(imagemSecreta);
  const frameFiltered = new cv.Mat();
  const framegray = new cv.Mat();

  cv.cvtColor(frame, framegray, cv.COLOR_RGBA2GRAY, 0);

  const tam = Number(tamanhoMatrizAtual);
  const matrizM = [];

  for (let i = 1; i <= tam; i++) {
    for (let j = 1; j <= tam; j++) {
      const inputElement = document.getElementById(`${i}x${j}`);
      matrizM.push(Number(inputElement.value));
    }
  }

  const Mask = cv.matFromArray(tam, tam, cv.CV_32FC1, matrizM);
  const anchor = new cv.Point(1, 1);

  const source = colorido.checked ? frame : framegray;

  cv.filter2D(
    source,
    frameFiltered,
    cv.CV_8U,
    Mask,
    anchor,
    0,
    cv.BORDER_DEFAULT
  );
  cv.imshow("canvasOutput", frameFiltered);

  imagemFrente.style.backgroundImage = `url(${canvas.toDataURL("image/png")})`;

  frame.delete();
  frameFiltered.delete();
  framegray.delete();
  Mask.delete();
}

function ajustarTamanhoImagem() {
  let lar = Number(imagemSecreta.width);
  let alt = Number(imagemSecreta.height);
  const max = 620;
  let x;
  if (lar > max && alt > max) {
    if (lar >= alt) {
      x = (alt / lar) * max;
      lar = max;
      alt = x;
    } else {
      x = (lar / alt) * max;
      alt = max;
      lar = x;
    }
  } else if (lar > max && alt < max) {
    //largura maior e altura menor
    x = (alt / lar) * max;
    lar = max;
    alt = x;
  } else if (lar < max && alt > max) {
    //altura maior e largura menor
    x = (lar / alt) * max;
    alt = max;
    lar = x;
  } else {
    //Cabe tranquilo
  }
  telaDeImagem.style.height = `${alt}px`;
  telaDeImagem.style.width = `${lar}px`;
  controleV.style.width = `${alt}px`;
  controleV.style.height = `${alt + 50}px`;
  controleH.style.width = `${lar}px`;
  //height é auto:
  imagemFrente.style.backgroundSize = `${lar}px`;
  imagemFundo.style.backgroundSize = `${lar}px`;
}

function adicionarFiltro(filtro) {
  let mascara;
  if (colorido.checked) {
    mascara = mascaras.find((mascara) => mascara.filtro === filtro)[
      tamanhoMatrizAtual + "c"
    ];
  } else {
    mascara = mascaras.find((mascara) => mascara.filtro === filtro)[
      tamanhoMatrizAtual
    ];
  }

  if (mascara) {
    let k = 0;
    for (let i = 1; i <= tamanhoMatrizAtual; i++) {
      for (let j = 1; j <= tamanhoMatrizAtual; j++) {
        const inputElement = document.getElementById(`${i}x${j}`);
        const valor = Number(inputElement.value);
        inputElement.value = mascara[k];
        k++;
      }
    }
    filtrar();
  } else {
    alert("Filtro Inexistente!");
  }
}

function carregarImagem(e) {
  if (e.target.files[0]) {
    imagemSecreta.src = URL.createObjectURL(e.target.files[0]);
    imagemFundo.style.backgroundImage = `url(${URL.createObjectURL(
      e.target.files[0]
    )})`;
  }
}

function baixarImagem() {
  let link = document.createElement("a");
  link.download = "imagem_filtrada.png";
  link.href = canvas.toDataURL();
  link.click();
}

function mostrarTela(tela) {
  telaAtual.style.display = "none";
  telaAtual = document.getElementById(tela);
  telaAtual.style.display = "flex";
}
