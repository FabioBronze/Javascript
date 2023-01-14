//CallBack Function
function exibir(num) {
    console.log(`A operação foi ${num}`)
}

function soma(a, b, cb) {
    let op = a + b
    cb(op)
}

function multiplicação(a, b, cb) {
    let op = a * b
    cb(op)
}

soma(2, 4, exibir)
multiplicação(4, 6, exibir)