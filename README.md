
# Filtros Espaciais

## Sobre o Projeto:

> Este projeto é uma ferramenta didática para o ensino e aprendizado de **convolução digital** e **filtros espaciais**. Esses dois tópicos são comuns nos cursos de processamento digital de imagens. O projeto foi o meu Trabalho de conclusão de curso, unindo a parte prática de desenvolvimento web com conhecimentos acadêmicos para auxiliar de forma visual novos estudantes no aprendizado de tópicos que ficam no campo abstrato. Nele, você pode ler sobre convolução e filtros, carregar imagens, criar diferentes tipos de filtros ou utilizar filtros conhecidos na literatura.

<hr>

## Deploy do projeto:

<https://andyrodrigo.github.io/Filtros>

<img src="/imagens/Layout.jpg"/>

## Índice:

<!--ts-->
   * [Necessidade](#Necessidade)
   * [Navegação](#Navegação)
   * [O que são Filtros de Imagens](#O que são Filtros de Imagens)
   * [Tipos de Filtros](#TiposdeFiltros)
   * [Convolução Digital](#Convolução Digital)
   * [Tutorial](#Tutorial)
   * [Tecnologias usadas no desenvolvimento](#Tecnologias usadas no desenvolvimento)
   * [Recursos](#Recursos)
<!--te-->

## Necessidade:

> Ferramentas tradicionais utilizadas para realizar filtragem no domínio do espaço e convolução digital geralmente não são muito efetivas em sua função didática. Ferramentas interativas, por outro lado, podem ser extremante úteis para cumprir essa missão nos cursos de processamento digital de imagens, sendo usadas para demonstrações e desenvolvimento de novos tipos de filtros. Além disso, esse tipo de ferramenta pode ser útil para evidenciar como os elementos de um filtro influenciam no resultado de uma filtragem. Esse trabalho propõe um ferramenta didática como uma opção para os professores e alunos de processamento digital de imagens, trazendo uma nova maneira de exibir e comparar as diferenças entre a imagem e sua versão filtrada, em um modelo de revelação do antes e depois da filtragem.

## Navegação:

> Na navegação da página você pode entender "**O que são filtros de imagens**", "**Quais são os tipos de filtros**", "**O que é convolução digital**" e ver um tutorial mais explicado de como usar a ferramenta.

## O que são Filtros de Imagens

> A filtragem espacial é uma técnica usada em processamento de imagens.

> O principal objetivo dela é fazer uma transformação da imagem digitalizada pixel a pixel de modo que a imagem resultante seja mais adequada que a imagem original para uma aplicação específica. Ressaltando que o "mais adequado" é subjetivo.

<img src="/imagens/oqf1.jpg"/>
<img src="/imagens/oqf2.jpg"/>

## Tipos de Filtros

> Existem diversos tipos de máscaras conhecidas e utilizadas para diferentes objetivos.

> O tamanho das máscaras (*kernel*) e os valores de seus parâmetros determinam o tipo de filtragem que será produzido na imagem de saída.

> Eles podem ser: filtros de suavização, filtros de realce e detectores de bordas.

<img src="/imagens/tf1.jpg"/>
<img src="/imagens/tf2.jpg"/>
<img src="/imagens/tf3.jpg"/>

## Convolução Digital

> A filtragem de imagens utiliza a técnica de convolução digital para processar a imagem resultado a partir da imagem de entrada e a da máscara.
>Uma matriz denominada máscara (kernel) é usada para convoluir com a imagem digital, servindo como o núcleo de convolução e gerando uma terceira matriz que será a imagem filtrada. Existem vários tipos conhecidos e utilizados de matrizes máscaras para realização da filtragem no domínio espacial, cada uma delas aproximando um efeito de filtragem esperado para a imagem. Elas geralmente têm um tamanho de linhas e colunas que varia entre 3x3 a 7x7.

<img src="/imagens/cd1.jpg"/>
<img src="/imagens/cd2.jpg"/>
<img src="/imagens/cd3.jpg"/>

## Tutorial

> Para usar este programa, tudo o que você precisa é **carregar** uma imagem para a área de exibição, **ajustar os elementos** da matriz da máscara, usar os controles deslizantes para **ver o resultado** e comparar com a imagem original. Você pode também pode baixar a imagem filtrada após o processo.

> Use o botão **Escolher arquivo** para carregar a imagem para a área de exibição.

> A imagem se ajustará ao tamanho da área de exibição se o tamanho da largura ou da coluna ultrapassar **750 pixeis**, entretanto, ao baixar, o resultado o tamanho original será mantido.

> Use o botão **Baixar Imagem Filtrada** para fazer o download do resultado.
O formato da imagem filtrada será na extensão PNG.

> Use os **controles deslizantes** horizontal e vertical ao redor da imagem para comparar o antes e depois da filtragem.

<img src="/imagens/ControleDeslizante.png" Width="500px" Height="350" /> <img src="/imagens/ControleDeslizanteV.png" Width="500px" Height="350" />

> Use a **matriz máscara** para filtrar a imagem. O processo ocorre automaticamente ao mudar qualquer elemento da matriz. Você também pode ajustar o tamanho de linhas e colunas entre 3x3, 5x5 e 7x7.

> Use a entrada de valor abaixo da máscara para operar sobre todos os elementos da máscara de uma só vez. Se quiser **zerar a máscara**, basta multiplicar por zero, por exemplo

<img src="/imagens/BMF.png"/>

> Você pode querer ver o resultado em **preto e branco ou colorido**. Para tanto use a checkbox da lista de filtros.
Lembrando que, o resultado de alguns filtros não opera muito bem dependendo dessa escolha. Faça os testes.

 > A **lista de filtros** contém alguns dos filtros mais comuns da literatura.
Clique no nome de algum deles para trazer os valores dele para máscara.

<img src="/imagens/ListaFiltros.png"/>

# Utilize, aprenda e divirta-se! =D

## Tecnologias usadas no desenvolvimento

* **JavaScript** Linguagem de programção usada na criação do projeto
* **HTML5** Linguagem de marcação de texto
* **CSS** Estilização da Ferramenta
* **OpenCV** Biblioteca com funções de PDI

## Recursos

> Este foi meu primeiro projeto em desenvolvimento web, logo, foi meu primeiro contato com a linguagem JavaScript. Por isso, pretendo trazer para ele os conhecimentos que fui adquirindo com o tempo e a prática, dando melhorias aos poucos.

- [x] Controle Deslizante do tipo: Antes/Depois
- [x] Carregamento de imagem para a ferramenta
- [x] Matriz Máscara com tamanhos: 3x3, 5x5, 7x7
- [x] Convolução Digital entre *kernel* e Imagem
- [x] Baixar imagens filtradas para o PC
- [x] Operações em tempo real
- [x] Lista de Filtros da Literatura
- [x] Carregamento de filtros da lista para a matriz
- [x] Controle de Preto/Branco e Colorido
- [x] Versões dos filtros da listas em 3 tamanhos
- [x] Criação de Navegação na tela
- [x] Janelas Explicando sobre Filtros Espaciais e Convolução Digital
- [x] Tutorial e Sobre
- [x] Operações Matemáticas sobre toda a matriz
- [x] Normalizar a matriz
- [x] Ajuste automático da imagem carregada na tela (tamanhos min e max)
- [ ] Responsividade
- [ ] Uso de FlexBox para tamanhos de elementos autoajustáveis
- [ ] Melhoria no Layout
- [ ] Uso de novos conhecimentos de CSS
- [ ] Separação dos arquivos js para cada elemento
- [ ] Imagens modelo para serem usadas
- [ ] Salvar filtros criados na lista
- [ ] Verificação de erros do usuário
- [ ] Verificação dos cálculos da convolução entre a imagem e a matriz
- [ ] Uso de filtro não-lineares



