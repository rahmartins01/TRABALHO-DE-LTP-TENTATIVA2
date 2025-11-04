export default class Receita {
  // Modificadores de acesso
  protected id: number;
  public nome: string;
  private descricao: string;
  private modoPreparo: string;

  constructor(id: number, nome: string, descricao: string, modoPreparo: string) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.modoPreparo = modoPreparo;
  }

  public exibirReceita(): void {
    console.log(`Receita: ${this.nome}`);
    console.log(`Descrição: ${this.descricao}`);
    console.log(`Modo de Preparo: ${this.modoPreparo}`);
  }
}

//  Herança + Polimorfismo
export class ReceitaDoce extends Receita {
  private nivelDoce: string;

  constructor(
    id: number,
    nome: string,
    descricao: string,
    modoPreparo: string,
    nivelDoce: string
  ) {
    super(id, nome, descricao, modoPreparo); // chama o construtor da classe mãe
    this.nivelDoce = nivelDoce;
  }

  // Sobrescrita de método (polimorfismo)
  public override exibirReceita(): void {
    console.log(` Receita Doce: ${this.nome}`);
    super.exibirReceita(); // aproveita o comportamento da classe mãe
    console.log(`Nível de Doçura: ${this.nivelDoce}`);
  }
}

