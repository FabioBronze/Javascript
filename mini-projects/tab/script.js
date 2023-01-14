let btn = document.querySelector('#but')
btn.addEventListener("click", gerar)

function gerar() {
    let num = document.querySelector('#itxt')
    let res = document.querySelector('#res')

    if(num.value.length == 0) {
        alert('[ERRO] Certifique-se que introduziu os valores corretos!')
    } else {
        let n = Number(num.value)
        res.textContent = ''

        for(let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            res.appendChild(item)
        }
    }
}