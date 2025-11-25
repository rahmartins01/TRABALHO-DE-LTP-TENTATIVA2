export class ReceitaError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ReceitaError";
    }
}

export class ReceitaNaoEncontradaError extends ReceitaError {
    constructor(id: number) {
        super(`Receita com ID ${id} não foi encontrada.`);
        this.name = "ReceitaNaoEncontradaError";
    }
}

export class DadosReceitaInvalidosError extends ReceitaError {
    constructor(campo: string) {
        super(`O campo "${campo}" está inválido ou não foi preenchido.`);
        this.name = "DadosReceitaInvalidosError";
    }
}

export class ReceitaDuplicadaError extends ReceitaError {
    constructor(id: number) {
        super(`Já existe uma receita com o ID ${id}.`);
        this.name = "ReceitaDuplicadaError";
    }
}

export class NivelDoceInvalidoError extends ReceitaError {
    constructor(nivel: string) {
        super(`O nível de doçura "${nivel}" não é válido.`);
        this.name = "NivelDoceInvalidoError";
    }
}
