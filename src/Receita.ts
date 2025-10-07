export default class Receita {
  id: number;
  nome: string;
  descricao: string;
  modoPreparo: string;

  constructor(id: number, nome: string, descricao: string, modoPreparo: string) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.modoPreparo = modoPreparo;
  }

  exibirReceita(): void {
    console.log(`Receita: ${this.nome}`);
    console.log(`Descrição: ${this.descricao}`);
     console.log(`modoPreparo: ${this.modoPreparo}`);

  }
}
