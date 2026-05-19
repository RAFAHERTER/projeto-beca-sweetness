
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

// Toggle visibilidade da senha: recebe o id do campo e o botão (opcional)
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