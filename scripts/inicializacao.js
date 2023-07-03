function escutadores() {
  controleH.addEventListener("input", rolarHorizontalmente);
  controleV.addEventListener("input", rolarVerticalmente);
  controleTamanhoMatriz.addEventListener("change", mudarTamanho_Matriz);

  entradaImagem.addEventListener("change", carregarImagem);
  imagemSecreta.addEventListener("load", ajustarTamanhoImagem);
  imagemSecreta.addEventListener("load", filtrar);

  bto_baixar.addEventListener("click", baixarImagem);
  bto_operacao.addEventListener("click", realizarOperacao_Matriz);
  bto_normalizar.addEventListener("click", normalizarMatriz);

  colorido.addEventListener("click", filtrar);
  pretoBranco.addEventListener("click", filtrar);

  //filtros
  bto_filtro_media.addEventListener("click", function () {
    adicionarFiltro("media");
  });
  bto_filtro_desfocar.addEventListener("click", function () {
    adicionarFiltro("desfocamento");
  });
  bto_filtro_agucar.addEventListener("click", function () {
    adicionarFiltro("aguçamento");
  });
  //bto_filtro_boost.addEventListener("click", function(){adicionarFiltro('boost')});
  bto_filtro_relevo.addEventListener("click", function () {
    adicionarFiltro("relevo");
  });
  bto_filtro_horizontal.addEventListener("click", function () {
    adicionarFiltro("horizontal");
  });
  bto_filtro_vertical.addEventListener("click", function () {
    adicionarFiltro("vertical");
  });
  bto_filtro_laplaciana.addEventListener("click", function () {
    adicionarFiltro("laplaciana");
  });
  bto_filtro_gaussiana.addEventListener("click", function () {
    adicionarFiltro("gaussiana");
  });
  bto_filtro_detectorBordas.addEventListener("click", function () {
    adicionarFiltro("detectorDeBordas");
  });
  bto_filtro_laplacianaGaussiana.addEventListener("click", function () {
    adicionarFiltro("laplacianaGaussiana");
  });

  //mostra os conteúdos do navegador
  home.addEventListener("click", function () {
    mostrarTela("ferramenta");
  });
  link1.addEventListener("click", function () {
    mostrarTela("info1");
  });
  link2.addEventListener("click", function () {
    mostrarTela("info2");
  });
  link3.addEventListener("click", function () {
    mostrarTela("info3");
  });
  link4.addEventListener("click", function () {
    mostrarTela("info4");
  });
  link5.addEventListener("click", function () {
    mostrarTela("info5");
  });
}

//inicialização
window.addEventListener("load", escutadores);
window.addEventListener("load", () => {
  criarMatriz(3, 3);
});
//window.addEventListener("load", montarFiltros());

iniciar();
