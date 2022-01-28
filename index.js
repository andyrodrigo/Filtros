
//Variáveis-------------------------------------------
//controles da tela:
let baixar = document.getElementById("baixar")
let ajusta = document.getElementById("ajusta")
let tabela = document.getElementById('matriz');
let fundo = document.getElementById("imagemFundo")
let frente = document.getElementById("imagemFrente")
let medidorH = document.getElementById("medidorH")
let medidorV = document.getElementById("medidorV")
let inputFile = document.getElementById('meuArquivo');
let imagemSecreta = document.getElementById('imagemSecreta');
let quadro = document.getElementById('Bimagem');
let colorido = document.getElementById('colorido');
let PretBran = document.getElementById('PretBran');
let operacao = document.getElementById('operacao');
let select = document.getElementById('operador');
let sig = document.getElementById('sigma');

//botões da navegação
let link1 = document.getElementById('link1');
let info1 = document.getElementById('info1');
let x1 = document.getElementById('x1');
let link2 = document.getElementById('link2');
let info2 = document.getElementById('info2');
let x2 = document.getElementById('x2');
let link3 = document.getElementById('link3');
let info3 = document.getElementById('info3');
let x3 = document.getElementById('x3');
let link4 = document.getElementById('link4');
let info4 = document.getElementById('info4');
let x4 = document.getElementById('x4');
let link5 = document.getElementById('link5');
let info5 = document.getElementById('info5');
let x5 = document.getElementById('x5');

//Botões da Lista de Filtros
let Fmedia = document.getElementById("Fmedia")
let Fdesfocar = document.getElementById("Fdesfocar")
let Faguçar = document.getElementById("Faguçar")
let Fboost = document.getElementById("Fboost")
let Frelevo = document.getElementById("Frelevo")
let Fhorizontal = document.getElementById("Fhorizontal")
let Fvertical = document.getElementById("Fvertical")
let Flaplaciana= document.getElementById("Flaplaciana")
let Fgaussiana = document.getElementById("Fgaussiana")
let FlapGau = document.getElementById("FlapGau")
let Fdetecta = document.getElementById("Fdetecta")

//Filtros:
let zerada3 = [0,0,0, 0,0,0, 0,0,0]
let zerada5 = [0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0]
let zerada7 = [0,0,0,0,0,0,0, 0,0,0,0,0,0,0, 0,0,0,0,0,0,0, 0,0,0,0,0,0,0, 0,0,0,0,0,0,0, 0,0,0,0,0,0,0, 0,0,0,0,0,0,0]
let memo3 = [1,1,1, 1,1,1, 1,1,1]
let media = [0.1111,0.1111,0.1111, 0.1111,0.1111,0.1111, 0.1111,0.1111,0.1111]
let desfocar = [1,1,1, 1,1,1, 1,1,1]
let aguçar = [-1,-1,-1, -1,9,-1, -1,-1,-1]
let boost = [0,-1,0, -1,5.2,-1, 0,-1,0]
let relevo = [-2,-1,0, -1,1,1, 0,1,2]
let horizontal = [-1,0,1, -2,0,2, -1,0,1]
let vertical = [-1,-2,-1, 0,0,0, 1,2,1]
let laplaciana = [0,-1,0, -1,4,-1, 0,-1,0]
let gaussiana = [0.0625,0.125,0.0625, 0.125,0.25,0.125,  0.0625,0.125, 0.0625]
let lapGau = [0,0,1,0,0, 0,1,2,1,0, 1,2,-16,2,1, 0,1,2,1,0, 0,0,1,0,0 ]
let detecta = [-1,-1,-1,  -1,8,-1, -1,-1,-1 ]

//Entradas da Matriz:
let ele = new Array(7)
ele[1] = new Array(7)
ele[2] = new Array(7)
ele[3] = new Array(7)
ele[4] = new Array(7)
ele[5] = new Array(7)
ele[6] = new Array(7)
ele[7] = new Array(7)

ele[1][1] = document.getElementById("1x1")
ele[1][2] = document.getElementById("1x2")
ele[1][3] = document.getElementById("1x3")
ele[1][4] = document.getElementById("1x4")
ele[1][5] = document.getElementById("1x5")
ele[1][6] = document.getElementById("1x6")
ele[1][7] = document.getElementById("1x7")

ele[2][1] = document.getElementById("2x1")
ele[2][2] = document.getElementById("2x2")
ele[2][3] = document.getElementById("2x3")
ele[2][4] = document.getElementById("2x4")
ele[2][5] = document.getElementById("2x5")
ele[2][6] = document.getElementById("2x6")
ele[2][7] = document.getElementById("2x7")

ele[3][1] = document.getElementById("3x1")
ele[3][2] = document.getElementById("3x2")
ele[3][3] = document.getElementById("3x3")
ele[3][4] = document.getElementById("3x4")
ele[3][5] = document.getElementById("3x5")
ele[3][6] = document.getElementById("3x6")
ele[3][7] = document.getElementById("3x7")

ele[4][1] = document.getElementById("4x1")
ele[4][2] = document.getElementById("4x2")
ele[4][3] = document.getElementById("4x3")
ele[4][4] = document.getElementById("4x4")
ele[4][5] = document.getElementById("4x5")
ele[4][6] = document.getElementById("4x6")
ele[4][7] = document.getElementById("4x7")

ele[5][1] = document.getElementById("5x1")
ele[5][2] = document.getElementById("5x2")
ele[5][3] = document.getElementById("5x3")
ele[5][4] = document.getElementById("5x4")
ele[5][5] = document.getElementById("5x5")
ele[5][6] = document.getElementById("5x6")
ele[5][7] = document.getElementById("5x7")

ele[6][1] = document.getElementById("6x1")
ele[6][2] = document.getElementById("6x2")
ele[6][3] = document.getElementById("6x3")
ele[6][4] = document.getElementById("6x4")
ele[6][5] = document.getElementById("6x5")
ele[6][6] = document.getElementById("6x6")
ele[6][7] = document.getElementById("6x7")

ele[7][1] = document.getElementById("7x1")
ele[7][2] = document.getElementById("7x2")
ele[7][3] = document.getElementById("7x3")
ele[7][4] = document.getElementById("7x4")
ele[7][5] = document.getElementById("7x5")
ele[7][6] = document.getElementById("7x6")
ele[7][7] = document.getElementById("7x7")
//-------------------------------------------------------------------------

//Funções--------------------------------------------------------------------
function ajustarTamanho(){ 
    if( ajusta.value == "3" ){
        tabela.style.marginLeft = "170px"
        for(let i=1;i<=7;i++){
            for(let j=1;j<=7;j++){
                let aux= document.getElementById(`${i}x${j}`)
                if(i<=3 && j<=3){                 
                    aux.style.display = "block"
                }else{
                    aux.style.display = "none"
                }
            }
        }
    } else if ( ajusta.value == "5" ){
        tabela.style.marginLeft = "110px"
        for(let i=1;i<=7;i++){
            for(let j=1;j<=7;j++){
                let aux= document.getElementById(`${i}x${j}`)
                if(i<=5 && j<=5){            
                    aux.style.display = "block"
                }else{
                    aux.style.display = "none"
                }
            }
        }
    } else { //ajusta.value = 7
        tabela.style.marginLeft = "50px"
        for(let i=1;i<=7;i++){
            for(let j=1;j<=7;j++){
                let aux= document.getElementById(`${i}x${j}`)
                aux.style.display = "block"
            }
        }
    }
}

function filtra(){
    
    let frame = new cv.Mat() // matriz que recebe a imagem
    let frameFiltered = new cv.Mat() // matriz filtrada
    let framegray = new cv.Mat() // imagem preto e branco

    frame = cv.imread(imagemSecreta)// recebe a imagem

    let Mask //Cria a matriz que recebe Máscara
    let tam = Number(ajusta.value)

    let matrizM = new Array
    let k= 0
    for (let i=1; i<= tam; i++){
        for (let j=1; j<= tam; j++){
            matrizM[k] = Number(ele[i][j].value);
            k++;
        }
    }
    Mask = cv.matFromArray(tam, tam, cv.CV_32FC1, matrizM)//máscara recebe a matriz

    let anchor = new cv.Point(1, 1);

    cv.cvtColor(frame, framegray, cv.COLOR_RGBA2GRAY, 0);//cria cópia preto e branco

    //Realiza a filtragem
    if(colorido.checked){
        cv.filter2D(frame, frameFiltered, cv.CV_8U, Mask, anchor, 0, cv.BORDER_DEFAULT )
        cv.imshow('canvasOutput', frameFiltered);
    }else{
        cv.filter2D(framegray, frameFiltered, cv.CV_8U, Mask, anchor, 0 , cv.BORDER_DEFAULT )
        cv.imshow('canvasOutput', frameFiltered);
    }
  
    const canvas = document.getElementById("canvasOutput");
    frente.style.backgroundImage = `url(${canvas.toDataURL("image/png")})`
  
    frame.delete();
    frameFiltered.delete();
    framegray.delete();
    Mask.delete();
}

function mudaH(){
    frente.style.width = `${medidorH.value}%`
}
function mudaV(){
    let num= String(100 - Number(medidorV.value))
    frente.style.height = `${num}%`
}

function opera(valor, operador){
    let sigma = sig.value
    switch (operador) {
        case '*':
            resultado = valor * sigma
          break;
        case '/':
            resultado = valor / sigma
          break;
        case '+':
            resultado = Number(valor) + Number(sigma)
          break;
        case '-':
            resultado = Number(valor) - Number(sigma)
          break;
        default:
          console.log("Erro");
      }
    return resultado
}

function operar(){
    let opção = select.options[select.selectedIndex].value
    let operador = "*"
    let ok = 1;
    switch (opção) {
        case 'multiplicador':
            operador = "*"
          break;
        case 'divisor':
            operador = "/"
            if(sig.value == 0){
                ok = 0;
                alert("Não existe divisão por zero! Reveja seus conceitos!")
            }
          break;
          case 'fator':
            operador = "+"
          break;
          case 'subtrator':
            operador = "-"
          break;
        default:
          console.log("Erro");
      }
      if(ok){
        for (let i=1; i<= 7; i++){
            for (let j=1; j<= 7; j++){
                ele[i][j].value = opera(ele[i][j].value, operador)    
            }
        }
      }

    filtra()
}

function addFiltro(mascara, tam){
    let k= 0
    for (let i=1; i<= tam; i++){
        for (let j=1; j<= tam; j++){
            ele[i][j].value = mascara[k]
            k++;
        }
    }
    ajusta.value = tam
    ajustarTamanho()
    filtra()
}

function proporção(){
    let lar= Number(imagemSecreta.width)
    let alt= Number(imagemSecreta.height)
    let max= 750
    let x
    if(lar > max && alt > max ){
        if(lar >= alt){
            x = (alt/lar)*max
            lar= max
            alt= x
        }else{
            x = (lar/alt)*max
            alt= max
            lar= x
        }
    }else if(lar > max && alt < max){//largura maior e altura menor
        x = (alt/lar)*max
        lar= max
        alt= x
    }else if(lar < max && alt > max){//altura maior e largura menor
        x = (lar/alt)*max
        alt= max
        lar= x
    }else{ //Cabe tranquilo

    }
    quadro.style.height = `${alt}px`
    quadro.style.width = `${lar}px`
    medidorV.style.height = `${alt}px`
    medidorH.style.width = `${lar}px`
    //height é auto:
    frente.style.backgroundSize = `${lar}px`
    fundo.style.backgroundSize = `${lar}px`
}

function download(){
    var link = document.createElement('a');
    link.download = 'filtrada.png';
    link.href = document.getElementById('canvasOutput').toDataURL()
    link.click()
}

function addMedia(){addFiltro(media, 3)}
function addDesfocar(){addFiltro(desfocar, 3)}
function addAguçar(){addFiltro(aguçar, 3)}
function addBoost(){addFiltro(boost, 3)}
function addRelevo(){addFiltro(relevo, 3)}
function addHorizontal(){addFiltro(horizontal, 3)}
function addVertical(){addFiltro(vertical, 3)}
function addLaplaciana(){addFiltro(laplaciana, 3)}
function addGaussiana(){addFiltro(gaussiana, 3)}
function addDetectorBordas(){addFiltro(detecta, 3)}
function addLapGau(){addFiltro(lapGau, 5)}


//controlam a visibilidade das janelas de navegação--------------------
function fecha(){
    info1.style.visibility = "hidden"
    info1.style.opacity = "0"
    info2.style.visibility = "hidden"
    info2.style.opacity = "0"
    info3.style.visibility = "hidden"
    info3.style.opacity = "0"
    info4.style.visibility = "hidden"
    info4.style.opacity = "0"
    info5.style.visibility = "hidden"
    info5.style.opacity = "0"
}
function mostra(janela){
    fecha()
    switch (janela) {
        case '1':
            info1.style.visibility = "visible"
            info1.style.opacity = "1"
          break;
        case '2':
            info2.style.visibility = "visible"
            info2.style.opacity = "1"
          break;
          case '3':
            info3.style.visibility = "visible"
            info3.style.opacity = "1"
          break;
          case '4':
            info4.style.visibility = "visible"
            info4.style.opacity = "1"
          break;
          case '5':
            info5.style.visibility = "visible"
            info5.style.opacity = "1"
          break;
        default:
          console.log("Erro");
      }
}
//-----------------------------------------------

//Escutadores---------------------------------------------------------------------------
function escutadores(){
    ajusta.addEventListener('change', ajustarTamanho)   //Ajusta o tamanho da Matriz de Máscara
    medidorH.addEventListener('input', mudaH )          //Rola o filtro Horizontalmente
    medidorV.addEventListener('input', mudaV )          //Rola o filtro Verticalmente
    baixar.addEventListener('click', download)          //Baixa a imagem filtrada

    PretBran.addEventListener('click', filtra)          //Filtra ao clicar em Preto e Branco
    colorido.addEventListener('click', filtra)          //Filtra ao clicar colorido
    operacao.addEventListener('click', operar)          //Opera sobre todos os elementos da Matriz Máscara

    //mostra os conteúdos do navegador
    link1.addEventListener('click', function(){mostra("1")} )
    link2.addEventListener('click', function(){mostra("2")} )
    link3.addEventListener('click', function(){mostra("3")} )
    link4.addEventListener('click', function(){mostra("4")} )
    link5.addEventListener('click', function(){mostra("5")} )
    //fecha os conteúdos do navegador
    x1.addEventListener('click', fecha)
    x2.addEventListener('click', fecha)
    x3.addEventListener('click', fecha)
    x4.addEventListener('click', fecha)
    x5.addEventListener('click', fecha)

    //Adiciona os filtros na Matriz Máscara
    Fmedia.addEventListener('click', addMedia)        
    Fdesfocar.addEventListener('click', addDesfocar)         
    Faguçar.addEventListener('click', addAguçar)             
    Fboost.addEventListener('click', addBoost)          
    Frelevo.addEventListener('click', addRelevo)         
    Fhorizontal.addEventListener('click', addHorizontal)      
    Fvertical.addEventListener('click', addVertical)        
    Flaplaciana.addEventListener('click', addLaplaciana)      
    Fgaussiana.addEventListener('click', addGaussiana)    
    FlapGau.addEventListener('click', addLapGau)         
    Fdetecta.addEventListener('click', addDetectorBordas)   

    //filtra automaticamente ao mudar algum valor da máscara
    ele[1][1].addEventListener('change', filtra)
    ele[1][2].addEventListener('change', filtra)
    ele[1][3].addEventListener('change', filtra)
    ele[1][4].addEventListener('change', filtra)
    ele[1][5].addEventListener('change', filtra)
    ele[1][6].addEventListener('change', filtra)
    ele[1][7].addEventListener('change', filtra)
    ele[2][1].addEventListener('change', filtra)
    ele[2][2].addEventListener('change', filtra)
    ele[2][3].addEventListener('change', filtra)
    ele[2][4].addEventListener('change', filtra)
    ele[2][5].addEventListener('change', filtra)
    ele[2][6].addEventListener('change', filtra)
    ele[2][7].addEventListener('change', filtra)
    ele[3][1].addEventListener('change', filtra)
    ele[3][2].addEventListener('change', filtra)
    ele[3][3].addEventListener('change', filtra)
    ele[3][4].addEventListener('change', filtra)
    ele[3][5].addEventListener('change', filtra)
    ele[3][6].addEventListener('change', filtra)
    ele[3][7].addEventListener('change', filtra)
    ele[4][1].addEventListener('change', filtra)
    ele[4][2].addEventListener('change', filtra)
    ele[4][3].addEventListener('change', filtra)
    ele[4][4].addEventListener('change', filtra)
    ele[4][5].addEventListener('change', filtra)
    ele[4][6].addEventListener('change', filtra)
    ele[4][7].addEventListener('change', filtra)
    ele[5][1].addEventListener('change', filtra)
    ele[5][2].addEventListener('change', filtra)
    ele[5][3].addEventListener('change', filtra)
    ele[5][4].addEventListener('change', filtra)
    ele[5][5].addEventListener('change', filtra)
    ele[5][6].addEventListener('change', filtra)
    ele[5][7].addEventListener('change', filtra)
    ele[6][1].addEventListener('change', filtra)
    ele[6][2].addEventListener('change', filtra)
    ele[6][3].addEventListener('change', filtra)
    ele[6][4].addEventListener('change', filtra)
    ele[6][5].addEventListener('change', filtra)
    ele[6][6].addEventListener('change', filtra)
    ele[6][7].addEventListener('change', filtra)
    ele[7][1].addEventListener('change', filtra)
    ele[7][2].addEventListener('change', filtra)
    ele[7][3].addEventListener('change', filtra)
    ele[7][4].addEventListener('change', filtra)
    ele[7][5].addEventListener('change', filtra)
    ele[7][6].addEventListener('change', filtra)
    ele[7][7].addEventListener('change', filtra)

    inputFile.addEventListener('change', (e) => {       //Coloca a imagem na tela
        imagemSecreta.src = URL.createObjectURL(e.target.files[0]);
        fundo.style.backgroundImage = `url(${URL.createObjectURL(e.target.files[0])})`
    })

    imagemSecreta.addEventListener('load', filtra)      //filtra assim que a imagem é trocada
    imagemSecreta.addEventListener('load', proporção)   //ajusta o tamanho na imagem dentro da exibição
}
//-----------------------------------------------------------------------------------------------------------------------

//inicialização
window.addEventListener("load", escutadores)
window.addEventListener("load", ajustarTamanho)