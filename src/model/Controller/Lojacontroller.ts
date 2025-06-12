import { LojaRepository } from "../repository/Lojarepository";
import { Loja } from "../Loja";

export class Lojacontroller implements LojaRepository {
    private produtos: Array<Loja> = new Array<Loja>();
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
      AdicionarProduto(produto: Loja): void {
     this.produtos.push(produto);
     console.log("Produto adicionado com sucesso!");}

       
    AtualizarProduto(produto: Loja): void {
        let buscarProduto= this.buscarNoArray(produto.numeroId)
        if(buscarProduto!= null) {
            this.produtos[ this.produtos.indexOf(buscarProduto)]= produto
            console.log( "o produto",produto.numeroId,"foi atualizada com sucesso");
        }else{
            console.log("o produto ", produto.numeroId,"nao foi encontrado para atualizacao");
        }
        } 
    
      ApagarProduto(produto: Loja): void {
        let buscarProduto= this.buscarNoArray(produto.numeroId)
        if(buscarProduto!=null){
            this.produtos.splice(this.produtos.indexOf(buscarProduto),1);
            console.log("o produto",produto.numeroId,"foi apagado com sucesso");
        
        }else{
          
          console.log("o produto0", produto.numeroId,"nao foi encontrado");
        }
        }
        formasDePagamento():string[]{
           return ["dinheiro","cartao de credito em até 6x ","cartao de debito","pix"];
    }
     verificarfaturamento(): number {
        let total=0;
        for(let produto of this.produtos){
            total= total +(produto.preco*produto.quantProdutos);
        }
        return total;
    }
     visualizar(): void {
        
    }
    public gerarnumero(): number{
    return ++ this.numero}//

    buscarNoArray(numero:number):Loja |null{
        for(let produto of this.produtos) {
            if (produto.numeroId===numero) 
                return produto
        }
          return null
    }

}