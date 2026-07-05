export default function Stats() {

    const cards = [

        {
            icon:"📦",
            title:"Produtos",
            value:"0"
        },

        {
            icon:"🖼️",
            title:"Imagens",
            value:"0"
        },

        {
            icon:"❌",
            title:"Sem imagem",
            value:"0"
        },

        {
            icon:"💊",
            title:"Laboratórios",
            value:"0"
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