
function pedir(){

let numero = "5519999072876"

let mensagem = "Olá! Vim pelo site da Beca Sweetness e gostaria de fazer uma encomenda."

let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`

window.open(url,'_blank') 

}

function enviarPedidoWhatsApp(event){
    event.preventDefault();
    const nome = document.getElementById('pedido-nome')?.value.trim() || '';
    const telefone = document.getElementById('pedido-telefone')?.value.trim() || '';
    const email = document.getElementById('pedido-email')?.value.trim() || '';
    const tipo = document.getElementById('pedido-tipo')?.value || '';
    const detalhes = document.getElementById('pedido-detalhes')?.value.trim() || '';
    const erro = document.getElementById('pedido-error');

    if(!nome || !telefone || !tipo || !detalhes){
        if(erro) erro.textContent = 'Por favor, preencha todos os campos obrigatórios (*).';
        return;
    }

    if(erro) erro.textContent = '';
    const mensagem = `Olá! Gostaria de fazer um pedido.%0aNome completo: ${nome}%0aTelefone/WhatsApp: ${telefone}%0aE-mail: ${email || 'Não informado'}%0aTipo de pedido: ${tipo}%0aDetalhes: ${detalhes}`;
    const numero = '5519999072876';
    const url = `https://wa.me/${numero}?text=${mensagem}`;
    window.open(url,'_blank');
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

function togglePassword(fieldId, btn){
    const input = document.getElementById(fieldId);
    if(!input) return;
    if(input.type === 'password'){
        input.type = 'text';
        if(btn) btn.textContent = '🙈';
    } else {
        input.type = 'password';
        if(btn) btn.textContent = '👁️';
    }
}

function handleCadastro(e){
    e.preventDefault();
    const nome = document.getElementById('nome')?.value || '';
    const email = document.getElementById('email')?.value || '';
    alert('Cadastro simulado para: ' + nome + '\nE-mail: ' + email);
}

function handleLogin(e){
    e.preventDefault();
    const email = document.getElementById('login-email')?.value || '';
    alert('Login simulado para: ' + email);
}