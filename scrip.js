const h1 = document.querySelector("h1");

const form = document.querySelector("#formulario");
const input1 = document.querySelector(".calculo1");
const input2 = document.querySelector(".calculo2");
const btn = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#result");

form.addEventListener("submit", btnOnClick);

/* btn.addEventListener("click", function btnOnClick() {
    const sumaImput = parseInt(input1.value) + parseInt(input2.value);
    resultado.innerText = "Resultado de la Suma " + sumaImput;
}); */

function btnOnClick(event) {
    event.preventDefault();
    const sumaImput = parseInt(input1.value) + parseInt(input2.value);
    resultado.innerText = "Resultado de la Suma " + sumaImput;
}
