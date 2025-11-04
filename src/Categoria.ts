import Receita from "./Receita";

export default class Categoria {
  private id: number;
  public nome: string;
  private receitas: Receita[] = [];

  constructor(id: number, nome: string) {
    this.id = id;
    this.nome = nome;
  }

  public adicionarReceita(receita: Receita): void {
    this.receitas.push(receita);
    console.log(`Receita "${receita.nome}" adicionada à categoria "${this.nome}"`);
  }

  public exibirReceitas(): void {
    console.log(`\nCategoria: ${this.nome}`);
    this.receitas.forEach((receita) => receita.exibirReceita());
  }
}
