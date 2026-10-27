import Livro from "./Livro.js";

class LivroEspescial extends Livro {
    constructor(titulo, autor, ano, categoria) {
        super(titulo, autor, ano);
        this.categoria = categoria;
    }

    exibirInfo() {
        return `${this.categoria.toUpperCase()} ${super.exibirInfo()}`;
    }
}

export default LivroEspescial;