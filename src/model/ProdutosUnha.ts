import {loja} from './Loja';
export class ProdutosUnha extends loja {
   private _tipoUnha: string;

    constructor(numeroId: number, produto: string, preco: number, tipo: number, estoque: number, quantProdutos:number ,tipoUnha: string) {
        super(numeroId, produto, preco, tipo, estoque);
        this._tipoUnha = tipoUnha;
    }
  public get tipoUnha(): string {
        return this._tipoUnha;
    }

public set tipoUnha(tipoUnha: string) {
    this._tipoUnha = tipoUnha;
   
    }
    

 public RetirarProduto(produto: string): boolean {

        if (this.estoque < produto.length) {
            console.log("\n Estoque Insuficiente!");
            return false;
        } else {
        this.estoque = this.quantProdutos + this.estoque; // Atualiza o estoque
            console.log("\n Produto retirado com sucesso!");
        return true;
        }
    }

    public AddProduto(produto: string): void {
        this.produto = this.produto + this.preco;
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
        console.log("numeroId: " + this.numeroId);
        console.log("Tipo de Unha: " + this.tipoUnha);//

    }

}
