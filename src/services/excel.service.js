import * as XLSX from "xlsx";

export async function lerPlanilha(file) {

    try {

        const buffer = await file.arrayBuffer();

        const workbook = XLSX.read(buffer, {
            type: "array"
        });

        const primeiraAba = workbook.SheetNames[0];

        const worksheet = workbook.Sheets[primeiraAba];

       const produtos = XLSX.utils.sheet_to_json(worksheet, {
    range: 5,
    defval: ""
});
        console.log("Planilha carregada!");

        console.log(produtos);

        console.log(produtos[0]);

        return produtos;

    } catch (erro) {

        console.error("Erro ao ler planilha:", erro);

        return [];

    }

}