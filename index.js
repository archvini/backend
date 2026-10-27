import Biblioteca from "./models/Biblioteca.js";
import Livro from "./models/Livro.js";
import LivroEspescial from "./models/LivroEspecial.js";

// dar nome a essa biblioteca
const minhaBiblioteca = new Biblioteca("GT Bezerra - Tarde");

// cria objeto livro1 com base na classe livro
const livro1 = new LivroEspescial('Dom Casmurro', 'Machado de Assis', 1899, 'Regional');
const livro2 = new Livro('Metamorfose', 'Kafka', 1915);

// adiciona o livro1 a biblioteca
minhaBiblioteca.adicionarLivro(livro1);
minhaBiblioteca.adicionarLivro(livro2);

// movimento dos livros
livro1.emprestar();
livro2.emprestar();
livro1.devolver();


// listagem dos livros
minhaBiblioteca.listarLivros();