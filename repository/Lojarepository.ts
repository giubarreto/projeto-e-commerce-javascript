import { Loja} from "../Loja"

export interface LojaRepository {

    buscarProdutoPornumeroId(numeroId: number): void;
    listartodosProdutos(): void;
    AdicionarProduto(produto: Loja): void;
    AtualizarProduto(produto: Loja): void;
    ApagarProduto(produto:Loja): void;


    formasDePagamento() :string[];
    verificarfaturamento(): number;
    visualizar(): void;
}