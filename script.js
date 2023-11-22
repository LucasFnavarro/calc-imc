const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", function () {

    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let resultado = document.querySelector(".resultado");
    let imc = peso / (altura * altura);

    resultado.style.color = "white"

    if (imc <= 17) {
        resultado.innerText = `Cuidado seu IMC é ${imc.toFixed(2)} Você está abaixo do peso ideal!`
    } else if (imc <= 25.5) {
        resultado.innerText = `Seu IMC é ${imc.toFixed(2)} Você está no peso ideal!`
    } else if (imc <= 32) {
        resultado.innerText = `Seu IMC é ${imc.toFixed(2)} Você está acima do peso ideal`
    } else if (imc <= 40) {
        resultado.innerText = `Seu IMC é ${imc.toFixed(2)} Você está em estado de obesidade`
    } else {
        alert("Não encontramos nenhuma informação, por favor reveja o formulário")
    }
})