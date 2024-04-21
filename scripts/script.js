const key = "fb113e8e2cc34925763d237c7f9e7089"


async function buscarCidade(cidade1){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade1}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    console.log(dados);

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + " °C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade " + dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

function buscar(){
    let cidade1 = document.querySelector(".input-cidade").value 
    buscarCidade(cidade1)
}
