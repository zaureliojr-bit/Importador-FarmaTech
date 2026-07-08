import { lerPlanilha } from "../services/excel.service.js";
import state from "../state/state";
import App from "../components/App";
import render from "./render";

export function iniciarDropZone() {

    const area = document.getElementById("dropzone");
    const input = document.getElementById("excelInput");

    if (!area || !input) return;

    area.addEventListener("click", () => {
        input.click();
    });

    input.addEventListener("change", async (event) => {

        const file = event.target.files[0];

        if (!file) return;

        console.log("Arquivo selecionado:", file.name);

        const produtos = await lerPlanilha(file);

        // Guarda os produtos no estado da aplicação
        state.produtos = produtos;
        render(App);
        console.log("Estado atualizado:");
        console.log(state);

    });

}