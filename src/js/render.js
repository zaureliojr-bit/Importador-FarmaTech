export default function render(component) {

    const app = document.querySelector("#app");

    app.innerHTML = component();

}