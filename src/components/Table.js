import EmptyState from "./EmptyState";

export default function Table() {

    return `

        <section class="table">

            <h2>Produtos Importados</h2>

            ${EmptyState()}

        </section>

    `;

}