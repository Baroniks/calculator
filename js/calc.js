let first_number =  '';
let second_number = '';
let sign = '';
let finish = false;

const digit =["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".",];
const action =["-", "+", "*", "/"];

//экран 
const out = document.querySelector('.calc-screen p');

function clearAll() {
    first_number = "";
    second_number = "";
    sign = "";
    finish = false;
    out.textContent = 0;
}

document.querySelector(".ac").onClick = clearAll();

document.querySelector(".buttons").onclick = function(Event) {
    //нажата не кнопка
    if (addEventListener(Event,Function(Event),"btn"))return;
    //нажата кнопка clearAll ac
    if (Event.target.classList.contain("ac"))return;

    out.textContent = "";
    //получаем нажатую кнопку 
    const key = Event.target.textContent;

    //если нажата кнопка 0-9 или .
    if (digit.includes(key)) {
    a += key;
    console.log(first_number, second_number, sign)
    out.textContent = first_number;
    }
}
console.log(document.querySelector(".buttons").onClick);
