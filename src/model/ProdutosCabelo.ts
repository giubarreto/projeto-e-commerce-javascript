import { Loja } from "./Loja";

export class ProdutosCabelo extends Loja {  
    private _tipoCabelo: string;
    constructor(numeroId: number, produto: string, preco: number, tipo: number, estoque: number,quantProdutos:number, tipoCabelo: string) {
        super(numeroId, produto, preco, tipo, estoque);
        this._tipoCabelo = tipoCabelo;
        
    }
    public get tipoCabelo(): string {
        return this._tipoCabelo;

    }
set tipoCabelo(tipoCabelo: string) {
    this._tipoCabelo = tipoCabelo;
    }
  

 public RetirarProduto(produto: string): boolean {

        if (this.estoque < produto.length) {
            console.log("\n Estoque Insuficiente!");
            return false;
        } else {
        this.estoque = this.quantProdutos + this.estoque; 
            console.log("\n Produto retirado com sucesso!");
        return true;
        }
    

    }



public verificarfaturamento(): number {
    return this.quantProdutos * this.preco;
}


  public visualizar(): void {

        let tipo: string = "";

        switch (this.tipo) {
            case 1:
                tipo = "unha";
                break;
            case 2:
                tipo = "cabelo";
                break;
        }

        console.log("\n\n*****************************************************");
        console.log("Dados do produto:");
        console.log("*****************************************************");
        console.log("quantidade do  produto: " + this.quantProdutos);
        console.log("estoque: " + this.estoque);
        console.log("Tipo de produto: " + this.tipo);
        console.log("preco: " + this.preco.toFixed(2));
        console.log("produto: " + this.produto);
        console.log("tipoCabelo: " + this._tipoCabelo);
        console.log("numeroId: " + this.numeroId);

    }

}