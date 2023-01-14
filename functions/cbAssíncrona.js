//setTimeout
setTimeout(function() {
     console.log("Teste de setTimeout")
}, 2000)

//setInterval
setInterval(function() {
    console.log("Teste de setInterval")
}, 1000) //Não para até haver uma instrução para parar


//ClearTimeout
var x = 0
var myTimer = setTimeout(function() {
    console.log("O x é 0")
}, 1500)
var x = 5
if (x > 0) {
    clearTimeout(myTimer) //Interrompe o Timeout
    console.log("O x passou de 0")
}


//clearInterval
var myTimer = setInterval(function() {
    console.log("Imprimindo Interval")
}, 500)

setTimeout(function() {
    console.log("Não precisamos mais imprimir!")
    clearInterval(myTime)
}, 1500)