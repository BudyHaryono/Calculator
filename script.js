/* variabel const terdiri dari 
angka, layar kalkulator, operator, =, bersihkan layar, dan decimal
*/
const numbers = document.querySelectorAll(".number");
const calculatorScreen = document.querySelector('.calculator-screen');
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector('.equal-sign');
const clearBtn = document.querySelector('.all-clear');
const decimal = document.querySelector('.decimal');

// untuk menunjuk angka pertama, operator, dan angka yg sekarang(bisa kedua atau pertama)
let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

// mengupdate layar
const updateScreen = (number) => {
    calculatorScreen.value = number;
}

// mengambil angka
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});

// input angka
const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
}

// mengambil operator
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    });
});

//menginput operator
const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '';
}

//menekan sama dengan, lalu hitung dan menampilkan hasil
equalSign.addEventListener("click", () => {
    calculate();
    updateScreen(currentNumber);
});

//fungsi hitung
const calculate = () => {
    let result = '';
    switch (calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = prevNumber - currentNumber;
            break;
        case "*":
            result = prevNumber * currentNumber;
            break;
        case "/":
            result = prevNumber / currentNumber;
            break;
        default:
            break;
    }
    currentNumber = result;
    calculationOperator = '';
}

//clear layar
clearBtn.addEventListener("click", () => {
    clearAll();
    updateScreen(currentNumber);
});

//fungsi untuk mengosongkan layar
const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
}

//mengambil desimal
decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value);
});

//input desimal atau koma
let inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return;
    }
    currentNumber += dot;
}