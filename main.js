const form = document.getElementById('form-numeros');

form.addEventListener('submit', function(e){
        e.preventDefault();

const valorA = document.getElementById('numero-a');
const valorB = document.getElementById('numero-b');

const mensagemSucesso = `Valor de A: ${valorA.value} <br> Valor de B: ${valorB.value} <br> Valor de B maior que de A`;
const mensagemErro = `Valor de A: ${valorA.value} <br> Valor de B: ${valorB.value} <br> Valor de A maior que de B`;
const mensagemEmpate = `Valor de A: ${valorA.value} <br> Valor de B: ${valorB.value} <br> Valor de A é o mesmo que de B`;

    if (valorA.value < valorB.value){
        const conteinerMensagemSucesso = document.querySelector('.success-message')
        conteinerMensagemSucesso.innerHTML = mensagemSucesso;
        conteinerMensagemSucesso.style.backgroundColor = 'rgba(28, 187, 28)';
        conteinerMensagemSucesso.style.display = 'block';


    }else if(valorA.value == valorB.value){
        const conteinerMensagemEmpate = document.querySelector('.success-message')
        conteinerMensagemEmpate.innerHTML = mensagemEmpate;
        conteinerMensagemEmpate.style.backgroundColor = '#fdcf00';
        conteinerMensagemEmpate.style.display = 'block';
    }else{
        const conteinerMensagemErro = document.querySelector('.success-message')
        conteinerMensagemErro.innerHTML = mensagemErro;
        conteinerMensagemErro.style.backgroundColor = 'red';
        conteinerMensagemErro.style.display = 'block';


        valorA.value = '';
        valorB.value = '';
    }
    
})

console.log(form);