let operacaoTotal = 0;
let buffer = "0";
let operadorAnterior;

const screen = document.querySelector('.screen');

function buttonClick(valor) {
    if (isNaN(valor)) {
        usarSimbolo(valor);
    } else {
        usarNumero(valor);
    }
    screen.innerText = buffer;
}

function usarSimbolo(simbolo) {
    switch (simbolo) {
        case 'C':
            buffer = '0';
            operacaoTotal = 0;
            break;

        case '=':
            if(operadorAnterior === null){
                return 
            }
            usarOperador(parseInt(buffer));
            operadorAnterior = null;
            buffer = operacaoTotal;
            operacaoTotal = 0;
            break;
        case '←':
            if(buffer.length === 1){
                buffer = '0';
            }else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case '+':
        case '−':
        case '×':
        case '÷':
            usarMath(simbolo);
            break;
        
    }
    }

    function usarMath(simbolo){
        if(buffer === '0'){
            return;
        }
        const intBuffer = parseInt(buffer);
        if(operacaoTotal === 0){
            operacaoTotal = intBuffer;
        }else {
            usarOperador(intBuffer);
        }
        operadorAnterior = simbolo;
        buffer = '0';
    }
    function usarOperador(intBuffer){
        if(operadorAnterior === '+'){
            operacaoTotal += intBuffer;
        }else if(operadorAnterior === '−'){
            operacaoTotal -= intBuffer;
        }else if(operadorAnterior === '×'){
            operacaoTotal *= intBuffer;
        }else if(operadorAnterior === '÷'){
            operacaoTotal /= intBuffer;
        }
    }

    function usarNumero(numeroString){
        if(buffer === '0'){
            buffer = numeroString;
        }else{
            buffer += numeroString;
        }
    }

    function inti(){
        document.querySelector('.calc-buttons').addEventListener('click', function(event){
            buttonClick(event.target.innerText);
        })
    }
    inti();