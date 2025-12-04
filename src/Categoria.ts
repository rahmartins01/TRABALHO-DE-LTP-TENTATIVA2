import Receita from "./Receita";
import {
    CategoriaSemReceitasError
} from "./erros/CategoriaErrors";

import {
    ReceitaDuplicadaError
} from "./erros/ReceitaErrors";

export default class Categoria {
    private id: number;
    public nome: string;
    private receitas: Receita[] = [];

    constructor(id: number, nome: string) {
        this.id = id;
        this.nome = nome;
    }

    public adicionarReceita(receita: Receita): void {

        // ssss Verifica se já existe uma receita com o mesmo ID
        const existe = this.receitas.some(r => (r as any).id === (receita as any).id);

        if (existe) {
            throw new ReceitaDuplicadaError((receita as any).id);
        }

        this.receitas.push(receita);
        console.log(`Receita "${receita.nome}" adicionada à categoria "${this.nome}".`);
    }

    public exibirReceitas(): void {
        if (this.receitas.length === 0) {
            throw new CategoriaSemReceitasError(this.nome);
        }

        console.log(`\nCategoria: ${this.nome}`);
        this.receitas.forEach(r => r.exibirReceita());
    }
}
