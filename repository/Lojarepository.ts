import { loja} from "../src/Loja"

export interface LojaRepository {

    buscarProdutoPornumeroId(numeroId: number): void;
    listartodosProdutos(): void;
    AdicionarProduto(produto: loja): void;
    AtualizarProduto(produto: loja): void;
    ApagarProduto(numeroId: number): void;



    RetirarProduto(produto: string): boolean;
    AddProduto(produto: string): void;
    verificarfaturamento(): number;
    visualizar(): void;
}