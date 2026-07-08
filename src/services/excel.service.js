import * as XLSX from "xlsx";

export async function lerPlanilha(file) {

    try {

        const buffer = await file.arrayBuffer();

        const workbook = XLSX.read(buffer, {
            type: "array"
        });

        const primeiraAba = workbook.SheetNames[0];

        const worksheet = workbook.Sheets[primeiraAba];

        const linhas = XLSX.utils.sheet_to_json(worksheet, {
            range: 5,
            defval: ""
        });

        const produtos = linhas.map(produto => ({

            codigo: produto.Codigo,

            descricao: produto.Descricao,

            codigoBarras: produto["Cod.Barra"],

            categoria: produto.Classe,

            grupo: produto.Grupo,

            laboratorio: produto["Laboratório"],

            estoque: Number(produto.Estoque || 0),

            custo: Number(
                String(produto.Custo || "0").replace(",", ".")
            ),

            venda: Number(
                String(produto.Venda || "0").replace(",", ".")
            ),

            reajuste: produto.Reajuste,

            promocao: produto.Promocao,

            imagem: null,

            statusImagem: "pendente",

            publicado: false

        }));

        console.log("Planilha carregada!");
        console.log(produtos);
        console.log(produtos[0]);

        return produtos;

    } catch (erro) {

        console.error("Erro ao ler planilha:", erro);

        return produtos;

    }

}