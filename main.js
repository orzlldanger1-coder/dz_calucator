const convertTemperature = function (celsius, toFahrenheit) {
    if (toFahrenheit === true) {
        return (celsius * 9 / 5) + 32;
    } else {
        return (celsius - 32) * 5 / 9;
    }
};
console.log(convertTemperature(0, true));
console.log(convertTemperature(32, false));
console.log(convertTemperature(25, true));
console.log(convertTemperature(77, false));

const validatePassword = (password) => {
    if (password.length <= 8) {
        return false;
    }

    if (!/[a-zA-Z]/.test(password)) {
        return false;
    }

    if (!/[0-9]/.test(password)) {
        return false;
    }
    return true;
}

const calculate = function(a, b, operation) {
    if (operation === "+") {
        return a + b;
    } else if (operation === "-") {
        return a - b;
    } else if (operation === "×") {
        return a * b;
    } else if (operation === "÷") {
        return a / b;
    } else {
        return "Неизвестная операция";
    }

};

console.log(calculate(10, 5, "+"))
console.log(calculate(6, 4, "-"))
console.log(calculate(8, 8, "×"))
console.log(calculate(9, 3, "÷"))

const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const result = document.getElementById("result")
const buttonAll = document.querySelectorAll(".operationBtn")

buttonAll.forEach((button) => {
    button.addEventListener("click", () => {
        const operation = button.textContent;
        const a = Number(num1.value);   
        const b = Number(num2.value);
        const answer = calculate(a, b, operation);
        result.textContent = answer;
    });
});


