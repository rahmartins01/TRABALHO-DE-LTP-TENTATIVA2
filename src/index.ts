import Receita, { ReceitaDoce } from "./Receita";
import Categoria from "./Categoria";

try {
  const sobremesas = new Categoria(1, "Sobremesas");
  const massas = new Categoria(2, "Massas");

  const macarrao = new Receita(
    1,
    "Macarrão",
    "Um bom almoço.",
    "Coloque o macarrão no fogo e cozinhe por 20 minutos."
  );

  massas.adicionarReceita(macarrao);

  const boloChocolate = new ReceitaDoce(
    2,
    "Bolo de Chocolate",
    "Bolo fofinho e delicioso.",
    "Misture tudo e asse por 40 minutos.",
    "Alto"
  );

  sobremesas.adicionarReceita(boloChocolate);

  massas.exibirReceitas();
  sobremesas.exibirReceitas();

  //massas.adicionarReceita(macarrao);
} catch (erro: any) {
  console.error("\n ERRO CAPTURADO:");
  console.error(erro.message);
}
