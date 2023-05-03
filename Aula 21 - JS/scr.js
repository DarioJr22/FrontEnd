var hora = document.getElementById("hora")
var minuto = document.getElementById("minuto")
var segundo = document.getElementById("segundo")

tempo = 0


const timer = setInterval(() => {
    let agora = new Date();
    let horaAgora = agora.getHours()
    let minutosAgora = agora.getMinutes()
    let segundoAgora = agora.getSeconds() < 10 ? "0" + agora.getSeconds() : agora.getSeconds()
    
    hora.textContent = horaAgora
    minuto.textContent = minutosAgora
    segundo.textContent = segundoAgora
}, 1000);

