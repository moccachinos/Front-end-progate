//horoscope
const divhoroscope = document.querySelector("#hr-div");
const btnhoroscopeif = document.querySelector("#hr-btn");
const btnhoroscopesw = document.querySelector("#hr-btn-sw");
const btnrst = document.querySelector("#rst-btn")

//btn if else//
btnhoroscopeif.addEventListener("click", () => {
    const p = document.createElement("p");
    const randomNumber = Date.now();
    let result = "";
    if (randomNumber % 13 == 0) {
        result = "Hebat!";
    } else if (randomNumber % 3 == 0) {
        result = "Boljug!";
    } else {
        result = "Mengerikan";
    }
    p.innerHTML = result;
    divhoroscope.appendChild(p);
});


//btn horoscope switch - case//
btnhoroscopesw.addEventListener("click", () => {
    const p = document.createElement("p");
    const randomNumber = Date.now();
    const randomLucky = randomNumber % 11;
    let result = "";
    switch (randomLucky) {
        case 0:
            result = "Miss Me?";
            break;
        case 1:
            result = "Great!";
            break;
        case 2:
            result = "Awesome!";
            break;
        case 3:
            result = "Hope you are okay";
            break;
        case 4:
            result = "Be patient";
            break;
        case 5:
            result = "Outstanding!";
            break;
        case 6:
            result = "Covered in black";
            break;
        case 7:
            result = "Good";
            break;
        case 8:
            result = "Be Prepared";
            break;
        case 10:
            result = "You good?";
            break;
        default:
            result = "Have your Luck!";
            break;
    }
    p.innerHTML = result;
    divhoroscope.appendChild(p);
});


//btn reset
btnrst.addEventListener("click", () => {
    divhoroscope.innerHTML = "";
});

//fizzbuzz 1 program
const divfizzbuzz1 = document.querySelector("#fb1-box");
const btnfizzbuzz1 = document.querySelector("#fb1-btn")
const btnrstfizzbuzz1 = document.querySelector("#fb1-rst-btn")

btnfizzbuzz1.addEventListener("click", () => {
    divfizzbuzz1.innerHTML = "";
    const p = document.createElement("p");
    const randomNumber = Date.now();
    let result = "";
    for (let i = 1; i <= 100; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            result += "FizzBuzz! ";
        } else if (i % 3 === 0) {
            result += "Fizz! ";
        } else if (i % 5 === 0) {
            result += "Buzz! ";
        } else {
            result += `${i} `;
        }
    }
    p.innerHTML = result;
    divfizzbuzz1.appendChild(p);
});

//btn reset
btnrstfizzbuzz1.addEventListener("click", () => {
    divfizzbuzz1.innerHTML = "";
});


//fizzbuzz 2 program
const divfizzbuzz2 = document.querySelector("#fb2-box");
const btnfizzbuzz2 = document.querySelector("#fb2-btn")
const btnrstfizzbuzz2 = document.querySelector("#fb2-rst-btn")
const inputfbz = document.querySelector("#fb-num")



btnfizzbuzz2.addEventListener("click", () => {
    divfizzbuzz2.innerHTML = "";
    const p = document.createElement("p");
    const value = inputfbz.value;
    let result = "";
        
    if (value == "0" || value == "") {
        result = "invalid input";
    } else if (value % 3 === 0 && value % 5 === 0) {
        result = "FizzBuzz! ";
    } else if (value % 5 === 0) {
        result = "Buzz! ";
    } else if (value % 3 === 0) {
        result = "Fizz! ";
    } else {
        result = `${value} `;
    }
    p.innerHTML = result;
    divfizzbuzz2.appendChild(p);
});

//btn reset
btnrstfizzbuzz2.addEventListener("click", () => {
    divfizzbuzz2.innerHTML = "";
});

