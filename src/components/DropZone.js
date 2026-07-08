export default function DropZone() {

    return `

        <main class="container">

            <section class="dropzone" id="dropzone">

                <input
                    type="file"
                    id="excelInput"
                    accept=".xls,.xlsx"
                    hidden
                >

                <div class="icon">
                    📊
                </div>

                <h2>Arraste sua planilha aqui</h2>

                <p>
                    ou clique para selecionar (.xls / .xlsx)
                </p>

            </section>

        </main>

    `;

}