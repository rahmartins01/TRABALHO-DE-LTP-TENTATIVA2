export class CategoriaError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "CategoriaError";
    }
}

export class CategoriaNaoEncontradaError extends CategoriaError {
    constructor(id: number) {
        super(`Categoria com ID ${id} não foi encontrada.`);
        this.name = "CategoriaNaoEncontradaError";
    }
}

export class CategoriaDuplicadaError extends CategoriaError {
    constructor(nome: string) {
        super(`Já existe uma categoria com o nome "${nome}".`);
        this.name = "CategoriaDuplicadaError";
    }
}

export class CategoriaSemReceitasError extends CategoriaError {
    constructor(nome: string) {
        super(`A categoria "${nome}" não possui receitas cadastradas.`);
        this.name = "CategoriaSemReceitasError";
    }
}
