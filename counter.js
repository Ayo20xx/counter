let count = document.getElementById("number");
count.innerText = 0;

let increment_button = document.getElementById("increment");
let decrement_button = document.getElementById("decrement");
let reset_button = document.getElementById("reset");

increment_button.addEventListener("click", increment);
decrement_button.addEventListener("click", decrement);
reset_button.addEventListener("click", reset);

function increment() { 
  let num = parseInt(count.innerText);
  num++;
  count.innerText = num;
}

function decrement() {
  let num = parseInt(count.innerText);
  if (num > 0) {
    num--;
    count.innerText = num;
  }
}

function reset() {
  count.innerText = 0;
}
