import {
    DadosReceitaInvalidosError,
    NivelDoceInvalidoError
} from "./erros/ReceitaErrors";

export default class Receita {
    protected id: number;
    public nome: string;
    private descricao: string;
    private modoPreparo: string;

    constructor(id: number, nome: string, descricao: string, modoPreparo: string) {

        if (!nome) throw new DadosReceitaInvalidosError("nome");
        if (!descricao) throw new DadosReceitaInvalidosError("descrição");
        if (!modoPreparo) throw new DadosReceitaInvalidosError("modo de preparo");

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

// HERANÇA (Receita Doce)

export class ReceitaDoce extends Receita {
    private nivelDoce: string;

    constructor(
        id: number,
        nome: string,
        descricao: string,
        modoPreparo: string,
        nivelDoce: string
    ) {
        super(id, nome, descricao, modoPreparo);

        const niveisValidos = ["Baixo", "Médio", "Alto"];

        if (!niveisValidos.includes(nivelDoce)) {
            throw new NivelDoceInvalidoError(nivelDoce);
        }

        this.nivelDoce = nivelDoce;
    }

    public override exibirReceita(): void {
        super.exibirReceita();
        console.log(`Nível de Doçura: ${this.nivelDoce}`);
    }
}
