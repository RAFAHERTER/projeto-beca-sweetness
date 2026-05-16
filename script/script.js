
function pedir(){

let numero = "5519999072876"

let mensagem = "Olá! Vim pelo site da Beca Sweetness e gostaria de fazer uma encomenda."

let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`

window.open(url,'_blank')

}

function voltarAoTopo(){
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

function filtrar(){
    const filtro = document.getElementById('filtro');
    if(!filtro) return;
    const valor = filtro.value;
    const docinhos = document.getElementById('docinhos');
    const bolos = document.getElementById('bolos');

    if(!docinhos || !bolos) return;

    if(valor === 'todos'){
        docinhos.style.display = '';
        bolos.style.display = '';
        return;
    }

    if(valor === 'docinhos'){
        docinhos.style.display = '';
        bolos.style.display = 'none';
        return;
    }

    if(valor === 'bolos'){
        docinhos.style.display = 'none';
        bolos.style.display = '';
        return;
    }
}