import leia from 'readline-sync'
import { ProdutosCabelo } from './src/ProdutosCabelo';
import { ProdutosUnha } from './src/ProdutosUnha';
export function main () {
    let opcao: number;

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

                break;
            case 2:
                console.log("\n\nListar todos os produtos em estoque\n\n");

                break;
            case 3:
                console.log("\n\nBuscar produto por Numero\n\n");

                break;
            case 4:
                console.log("\n\nAtualizar produto por numero \n\n");

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