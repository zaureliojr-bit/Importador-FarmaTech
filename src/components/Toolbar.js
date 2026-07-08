export default function Toolbar() {
    return `
        <section class="toolbar">

            <div class="toolbar-search">
                <input
                    type="text"
                    placeholder="🔍 Pesquisar produto..."
                >
            </div>

            <div class="toolbar-filters">

                <select>
                    <option>Todas as categorias</option>
                </select>

                <select>
                    <option>Todos os laboratórios</option>
                </select>

            </div>

            <div class="toolbar-actions">

                <button class="btn-primary">
                    ☁ Publicar
                </button>

                <button class="btn-secondary">
                    📤 Exportar
                </button>

            </div>

        </section>
    `;
}