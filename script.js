function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res');
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Erro ao digitar os dados'
    } else {
        res.innerHTML = 'Contando...'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        // console.log(`${i} ${f} ${p}`)
        // res.innerHTML = (`${i} ${f} ${p}`) 
        if (p <= 0){
            alert('Passo não pode ser 0! Agora Passo vale 1')
            p = 1            
        }
        res.innerHTML = (`${i} ${f} ${p}`)
    }
}

