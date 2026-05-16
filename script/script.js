
function pedir(){

let numero = "5519999072876"

let mensagem = "Olá! Vim pelo site da Beca Sweetness e gostaria de fazer uma encomenda."

let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`

window.open(url,'_blank')

}

function voltarAoTopo(){
    window.scrollTo({ top: 0, behavior: 'smooth' })
}