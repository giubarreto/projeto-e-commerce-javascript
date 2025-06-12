import { LojaRepository } from "../../../repository/Lojarepository";
import { loja } from "../../Loja";

export class Lojacontroller implements LojaRepository {
    private produtos: Array<loja> = new Array<loja>();
     numero: number = 0;


    buscarProdutoPornumeroId(numeroId: number): void {
     let buscarProduto=this.buscarNoArray(numeroId);
     if(buscarProduto!= null) {
        buscarProduto.visualizar()
        
     }else {
        console.log(" o produto",numeroId, "nao foi encontrado");
     }
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
        let buscarProduto= this.buscarNoArray(produto.numeroId)
        if(buscarProduto!= null) {
            this.produtos[ this.produtos.indexOf(buscarProduto)]= produto
            console.log( "o produto",produto.numeroId,"foi atualizada com sucesso");
        }else{
            console.log("o produto ", produto.numeroId,"nao foi encontrado para atualizacao");
        }
        } 
    
    ApagarProduto(numeroId: number): void {

    }
    RetirarProduto(produto: string): boolean {

        return true;
    
    }
    AddProduto(produto: string): void {
    
    }
    verificarfaturamento(): number {
        return 0;
    }
    visualizar(): void {
        
    }
    public gerarnumero(): number{
    return ++ this.numero}//

    buscarNoArray(numero:number):loja |null{
        for(let produto of this.produtos) {
            if (produto.numeroId===numero) 
                return produto
        }
          return null
    }

}