let str = '';

const calc = document.getElementById('calculator');
const display = document.getElementById('display');
const btnClear = document.getElementById('clear');
const btnEqual = document.getElementById('equal');
const operators = '+-x÷';

calc.addEventListener('click', ev => {
    const el = ev.target;
    if (el.classList.contains('operator') || el.classList.contains('number')) {
        str += el.textContent;
    }
    display.innerText = str;
})

btnClear.addEventListener('click', () => str = '')

btnEqual.addEventListener('click', calculate)

function calculate() {
    if (!str.match(/^[0-9.]+([+x÷-][0-9.]+)+$/)) {
        return str = 'Error';
    }
    let num1 = num2 = operator = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (operators.includes(char)) {
            if (operator) {
                switch (operator) {
                    case '+':
                        num1 = +num1 + +num2;
                        break;
                    case '-':
                        num1 = num1 - num2;
                        break;
                    case 'x':
                        num1 = num1 * num2;
                        break;
                    case '÷':
                        num1 = num1 / num2;
                        break;
                }
                if (isNaN(num1)) {
                    return str = 'Error';
                }
                num2 = '';
            }
            operator = char;

        } else {
            if (operator === '') {
                num1 += char;
            } else {
                num2 += char;
            }
        }
    }
    switch (operator) {
        case '+':
            num1 = +num1 + +num2;
            break;
        case '-':
            num1 = num1 - num2;
            break;
        case 'x':
            num1 = num1 * num2;
            break;
        case '÷':
            num1 = num1 / num2;
            break;
    }
    if (isNaN(num1)) {
        return str = 'Error';
    }
    return str = num1;
}


