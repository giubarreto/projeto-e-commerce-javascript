
import leia from 'readline-sync'
import { ProdutosCabelo } from './src/model/ProdutosCabelo';
import { ProdutosUnha} from './src/model/ProdutosUnha'
import { Lojacontroller } from './src/model/Controller/Lojacontroller';
export function main () {

    let produtos:Lojacontroller= new Lojacontroller();
    let opcao, numero, tipo, preco ,quantidade : number
    let nome,cor: string
    let tiposProdutos = ["unha", "cabelo"];


while (true) {
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                Palácio das unhas                    ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Adicionar estoque de produtos        ");
        console.log("            2 - Listar todos os produtos em estoque  ");
        console.log("            3 - Buscar produto por Numero            ");
        console.log("            4 - Atualizar produto por numero         ");
        console.log("            5 - formas de pagamento                  ");
        console.log("            6 - adicionar valor aos produtos         ");                    
        console.log("            7 - verificar faturamento                ");
        console.log("            8 - apagar produto                       ");
        console.log("            9 - Sair do sistema                      ");               
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = leia.questionInt("");

        if (opcao == 9) {
            console.log("\n!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nadicionar estoque de produtos\n\n");

                numero= produtos.gerarnumero()
                produtos.visualizar()

                console.log ("digite o nome do produto");
                nome=leia.question("")

                console.log ("digite o tipo de produto")
                tipo= leia.keyInSelect(tiposProdutos,"",{cancel:false})+1;

                console.log("digite o preco do produto");
                preco=leia.questionFloat("");

                console.log("digite a quantidade de produtos")
                quantidade=leia.questionInt("")

                 cor="";
                 if (
                 (tipo === 1 && nome.toLowerCase().includes("esmalte")) ||
                 (tipo === 2 && nome.toLowerCase().includes("tinta"))
                  ) {
                  console.log("digite a cor do produto");
                   cor = leia.question("");
                
                   }
                if (tipo === 1){
        let produtoUnha = new ProdutosUnha(numero, nome, preco, tipo, quantidade,quantidade,cor);
        produtos.AdicionarProduto(produtoUnha);
                }else if (tipo ===2){
        let produtoCabelo = new ProdutosCabelo(numero, nome, preco, tipo, quantidade,quantidade,cor);
        produtos.AdicionarProduto(produtoCabelo);
    }

                break;
            case 2:
                console.log("\n\nListar todos os produtos em estoque\n\n");
                produtos.listartodosProdutos();
                console.log("\n\n");//

                break;
            case 3:
                console.log("\n\nBuscar produto por Numero\n\n");
                console.log("digite o numero do produto:")
                numero= leia.questionInt("")
                produtos.buscarProdutoPornumeroId(numero)
                

                break;
            case 4:
                console.log("\n\nAtualizar produto por numero \n\n");

                console.log("digite o nome do produto")
                nome=leia.question("")
                
                console.log ("digite o numero do produto");
                numero=leia.questionInt("")

                let produto= produtos.buscarNoArray(numero)
                 if (produto!= null){

                console.log ("digite o tipo de produto")
                tipo= leia.keyInSelect(tiposProdutos,"",{cancel:false})+1;

                console.log("digite o preco do produto");
                preco=leia.questionFloat("");

                console.log("digite a quantidade de produtos")
                quantidade=leia.questionInt("")

                        cor = "";
                    if (
                (tipo === 1 && nome.toLowerCase().includes("esmalte")) ||
                (tipo === 2 && nome.toLowerCase().includes("tinta"))
                ) {
                console.log("digite a cor do produto");
                   cor = leia.question("");
                
                   }
                if (tipo === 1){
        let produtoUnha = new ProdutosUnha(numero, nome,preco, tipo, quantidade,quantidade,cor);
        produtos.AtualizarProduto(produtoUnha);
                }else if (tipo ===2){
        let produtoCabelo = new ProdutosCabelo(numero, nome ,preco, tipo, quantidade,quantidade,cor);
        produtos.AtualizarProduto(produtoCabelo);
    }
                 }else { console.log("produto",produtos.numero,"nao foi encontrada")
                    
                 } 

                break;
            case 5:
                console.log("\n\nformas de pagamento  \n\n");

                break;
            case 6:
                console.log("\n\nadicionar valor aos produtos\n\n");

                break;
            case 7:
                console.log("\n\nverificar lucro \n\n");

                break;
            case 8:
                console.log("\n\napagar produto  \n\n");

                break;
            default:
                console.log("\nOpção Inválida!\n");

                break;
        }
    }
}


/* Função com os dados da pessoa desenvolvedora */

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log("*****************************************************");
}

main();