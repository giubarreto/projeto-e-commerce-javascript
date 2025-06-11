import { LojaRepository } from "../../../repository/Lojarepository";
import { loja } from "../../Loja";

export class Lojacontroller implements LojaRepository {
    private produtos: Array<loja> = new Array<loja>();
     numero: number = 0;


    buscarProdutoPornumeroId(numeroId: number): void {
        throw new Error("Method not implemented.");
    }
    listartodosProdutos(): void {
        if (this.produtos.length === 0) {
            console.log("Nenhum produto cadastrado.");
        }else {
            console.log("Lista de produtos:");  
            for(let produto of this.produtos) {
               produto.visualizar();
            };
        }
    }
    AdicionarProduto(produto: loja): void {
   this.produtos.push(produto);
   console.log("Produto adicionado com sucesso!");}

       
    AtualizarProduto(produto: loja): void {
        throw new Error("Method not implemented.");
    }
    ApagarProduto(numeroId: number): void {
        throw new Error("Method not implemented.");
    }
    RetirarProduto(produto: string): boolean {
        throw new Error("Method not implemented.");
    }
    AddProduto(produto: string): void {
        throw new Error("Method not implemented.");
    }
    verificarfaturamento(): number {
        throw new Error("Method not implemented.");
    }
    visualizar(): void {
        throw new Error("Method not implemented.");
    }
    public gerarnumero(): number{
    return ++ this.numero}//
}
