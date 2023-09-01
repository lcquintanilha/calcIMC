function meuEscopo(){

    const peso = document.querySelector("#peso");
    const altura = document.querySelector("#altura");
    const form = document.querySelector(".form");


    function enviar(evento){
        evento.preventDefault();
        
        const spanAltura = document.querySelector("#spanAltura");
        const spanPeso = document.querySelector("#spanPeso");
        const resultado = document.querySelector("#resultado");

        if(altura.value === ""){
            spanAltura.style.display = "inline-block";
            altura.style.border = "solid 1px red";
        }else{
            spanAltura.style.display = "none";
            altura.style.border = "solid black 1px";
        }
        
        if(peso.value === ""){
            spanPeso.style.display = "inline-block";
            peso.style.border = "solid 1px red";
        }else{
            spanPeso.style.display = "none";
            peso.style.border = "solid 1px black";
        }

        if(altura.value !== "" && peso.value !== ""){
            let imc = peso.value/((altura.value/100)**2);

            if(imc < 18.5){
                resultado.innerHTML = `O seu IMC é de ${imc.toFixed(2)}.<br>Você está <strong>abaixo do peso</strong>`
                resultado.style.display = "block"
            }else if(imc < 25){
                resultado.innerHTML = `O seu IMC é de ${imc.toFixed(2)}.<br>Você está com o <strong>peso normal</strong>`
                resultado.style.display = "block"
            }else if(imc < 30){
                resultado.innerHTML = `O seu IMC é de ${imc.toFixed(2)}.<br>Você está com <strong>sobrepeso</strong>`
                resultado.style.display = "block"
            }else if(imc < 35){
                resultado.innerHTML = `O seu IMC é de ${imc.toFixed(2)}.<br>Você está com <strong>Obesidade grau 1</strong>`
                resultado.style.display = "block"
            }else if(imc <= 40){
                resultado.innerHTML = `O seu IMC é de ${imc.toFixed(2)}.<br>Você está com <strong>Obesidade grau 2</strong>`
                resultado.style.display = "block"
            }else if(imc > 40){
                resultado.innerHTML = `O seu IMC é de ${imc.toFixed(2)}.<br>Você está com <strong>Obesidade grau 3</strong>`
                resultado.style.display = "block"
            }
        }
    }

    form.addEventListener('submit', enviar);
}

meuEscopo()