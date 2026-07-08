import Header from "./Header";
import Stats from "./Stats";
import Toolbar from "./Toolbar";
import DropZone from "./DropZone";
import Table from "./Table";

export default function App(){

    return `

        <div class="app">

            ${Header()}

            ${Stats()}

            ${Toolbar()}

            ${DropZone()}

            ${Table()}

        </div>

    `;

}