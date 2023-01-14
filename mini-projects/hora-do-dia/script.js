window.onload = function() {
    let data = new Date()
    let hora = data.getHours()

    let msg = document.querySelector('#msg')
    let imagem = document.querySelector('#imagem')
    let msg2 = document.querySelector('#msg2')

    msg.textContent = `Agora são ${hora} horas`  

    if(hora >= 0 && hora < 12) {
        imagem.src = 'img/dia.jpg'
        document.body.style.background = '#e2cd9f'
        msg2.textContent = 'Bom Dia!'
    } else if(hora >= 12 && hora < 18) {
        imagem.src = 'img/tarde.jpg'
        document.body.style.background = '#b9846f'
        msg2.textContent = 'Boa Tarde!'
    } else {
        imagem.src = 'img/noite.jpg';
        document.body.style.background = '#515154'
        msg2.textContent = 'Boa Noite!'
    }
}