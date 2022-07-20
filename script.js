let numero = document.getElementById('numero');
numero.focus()
let res = document.getElementById('res')
let quadro = document.getElementById('quadro')
let valores = []

function verificar(n, l){
    if(l.indexOf(Number(n)) == -1){
        return true;
    } else{
        alert('Número já inserido na lista')
        numero.value = ''
        numero.focus()
        return false
    }
}

function inserir(){
    let achou 
    if(numero.value.length == 0){
        alert('insira algum valor')
        numero.focus()
        achou = true;
        return
    }
    let n = Number(numero.value);
    if(n<1 || n>100){
        alert('Insira um número de 1 a 100');
        numero.focus()
    } else if(verificar(n, valores)){
        /*quadro.innerHTML = ''*/
        valores.push(n)
        let item = document.createElement('option');
        item.innerHTML += `valor ${n}`
        quadro.appendChild(item)
        numero.value = ''
        numero.focus()     
    }
}

function finalizar(){
    res.innerHTML = `O total é de ${valores.length} elementos<br>`
    valores.sort()
    res.innerHTML += `O menor valor é ${valores[0]}<br>`
    res.innerHTML += `O maior valor é ${valores[valores.length-1]}<br>`
    let soma = 0
    for(let pos = 0; pos<valores.length; pos++){
        soma += valores[pos]
    }
    res.innerHTML +=`A soma dos valores é ${soma}`
}

function apagar(){
   location.reload()
}