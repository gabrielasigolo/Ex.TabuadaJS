function gerar() {
    var numero = document.getElementById('num')
    var tabuada = document.getElementById('tab')
    

    if (numero.value.length == 0) {
        window.alert('Digite um número válido!')
    } else {
        var num = Number(numero.value)
        var c = 1
        tabuada.innerHTML = ''
        while (c <= 10){
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num * c}`
            item.value = `tab${c}`
            tabuada.appendChild(item)
            c++
        }
    }
}

//  <br>