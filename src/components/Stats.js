import state from "../state/state";
export default function Stats() {

    const cards = [

    {
        icon: "📦",
        title: "Produtos",
        value: state.produtos.length
    },

    {
        icon: "🖼️",
        title: "Imagens",
        value: state.produtos.filter(p => p.imagem).length
    },

    {
        icon: "❌",
        title: "Sem imagem",
        value: state.produtos.filter(p => !p.imagem).length
    },

    {
        icon: "💊",
        title: "Laboratórios",
        value: new Set(
            state.produtos.map(p => p.laboratorio)
        ).size
    }

];

    return `

        <section class="stats">

            ${cards.map(card=>`

                <div class="card">

                    <div class="card-icon">
                        ${card.icon}
                    </div>

                    <div>

                        <small>${card.title}</small>

                        <h2>${card.value}</h2>

                    </div>

                </div>

            `).join("")}

        </section>

    `;

}