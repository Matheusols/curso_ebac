document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sorteador').addEventListener('submit', function(evento){
        evento.preventDefault();

        var dado1 = document.getElementById('dado1')
        var dado2 = document.getElementById('dado2')
        var dado3 = document.getElementById('dado3')
        var dado4 = document.getElementById('dado4')
        var dado5 = document.getElementById('dado5')
        var dado6 = document.getElementById('dado6')
        var dado7 = document.getElementById('dado7')

        dado1.onclick = function(){
            const dadoD4 = 4;

            let numeroDado1 = Math.random() * dadoD4;
            numeroDado1 = Math.floor(numeroDado1 + 1);
    
            document.getElementById('resultado-valor').innerText = numeroDado1;
            document.querySelector('.resultado').style.display = 'block';
        }
        dado2.onclick = function(){
            const dadoD6 = 6;

            let numeroDado2 = Math.random() * dadoD6;
            numeroDado2 = Math.floor(numeroDado2 + 1);
    
            document.getElementById('resultado-valor').innerText = numeroDado2;
            document.querySelector('.resultado').style.display = 'block';
        }
        dado3.onclick = function(){
            const dadoD8 = 8;

            let numeroDado3 = Math.random() * dadoD8;
            numeroDado3 = Math.floor(numeroDado3 + 1);
    
            document.getElementById('resultado-valor').innerText = numeroDado3;
            document.querySelector('.resultado').style.display = 'block';
        }
        dado4.onclick = function(){
            const dadoD10 = 10;

            let numeroDado4 = Math.random() * dadoD10;
            numeroDado4 = Math.floor(numeroDado4 + 1);
    
            document.getElementById('resultado-valor').innerText = numeroDado4;
            document.querySelector('.resultado').style.display = 'block';
        }
        dado5.onclick = function(){
            const dadoD12 = 12;

            let numeroDado5 = Math.random() * dadoD12;
            numeroDado5 = Math.floor(numeroDado5 + 1);
    
            document.getElementById('resultado-valor').innerText = numeroDado5;
            document.querySelector('.resultado').style.display = 'block';
        }
        dado6.onclick = function(){
            const dadoD20 = 20;

            let numeroDado6 = Math.random() * dadoD20;
            numeroDado6 = Math.floor(numeroDado6 + 1);
    
            document.getElementById('resultado-valor').innerText = numeroDado6;
            document.querySelector('.resultado').style.display = 'block';
        }
        dado7.onclick = function(){
            const dadoD100 = 100;

            let numeroDado7 = Math.random() * dadoD100;
            numeroDado7 = Math.floor(numeroDado7 + 1);
    
            document.getElementById('resultado-valor').innerText = numeroDado7;
            document.querySelector('.resultado').style.display = 'block';
        }
    })
})