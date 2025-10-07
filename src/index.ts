import Receita from "./Receita";
import Categoria from "./Categoria";

// Criando categorias
const sobremesas = new Categoria(1, "Sobremesas");
const massas = new Categoria(2, "Massas");

// Criando uma receita
const boloChocolate = new Receita(
  1,
  "Bolo de Chocolate",
  "Um bolo fofinho e delicioso para o café da tarde.",
  "Misture os ingredientes, asse por 40 minutos.",
);

sobremesas.adicionarReceita(boloChocolate);
sobremesas.exibirReceitas();

// Criando uma receita
const macarrao = new Receita(
  2,
  "Macarrão",
  "Um bom almoço.",
  "Coloque o macarrão no fogo, e cozinhe por 20 minutos.",
);

massas.adicionarReceita(macarrao);
massas.exibirReceitas();

