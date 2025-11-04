import Receita, { ReceitaDoce } from "./Receita";
import Categoria from "./Categoria";

// Criando categorias
const sobremesas = new Categoria(1, "Sobremesas");
const massas = new Categoria(2, "Massas");

// Criando uma receita normal
const macarrao = new Receita(
  1,
  "Macarrão",
  "Um bom almoço.",
  "Coloque o macarrão no fogo e cozinhe por 20 minutos."
);
massas.adicionarReceita(macarrao);

// Criando uma receita doce (herança + polimorfismo)
const boloChocolate = new ReceitaDoce(
  2,
  "Bolo de Chocolate",
  "Um bolo fofinho e delicioso para o café da tarde.",
  "Misture os ingredientes e asse por 40 minutos.",
  "Alto"
);
sobremesas.adicionarReceita(boloChocolate);

// Exibindo receitas
massas.exibirReceitas();
sobremesas.exibirReceitas();


