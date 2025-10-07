import Receita from "./Receita";

export default class Categoria {
  id: number;
  nome: string;
  receitas: Receita[] = [];

  constructor(id: number, nome: string) {
    this.id = id;
    this.nome = nome;
  }

  adicionarReceita(receita: Receita): void {
    this.receitas.push(receita);
    console.log(`Receita "${receita.nome}" adicionada à categoria "${this.nome}"`);
  }

  exibirReceitas(): void {
    console.log(`Categoria: ${this.nome}`);
    this.receitas.forEach((receita) => receita.exibirReceita());
  }
}
