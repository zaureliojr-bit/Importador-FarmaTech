import Header from "../components/Header";
import DropZone from "../components/DropZone";
import Stats from "../components/Stats";

document.querySelector("#app").innerHTML = `
    ${Header()}
    ${DropZone()}
    ${Stats()}
`;