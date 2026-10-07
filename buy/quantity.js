const count = document.getElementById("count");
const addBtn = document.getElementById("addBtn");
const subBtn = document.getElementById("subBtn");

let quantity = 1;

addBtn.addEventListener("click", () => {
    quantity++;
    count.textContent = String(quantity);
});

subBtn.addEventListener("click", () => {
    if(quantity > 1) {
        quantity--;
        count.textContent = String(quantity);
    } else {
        console.warn("Количество не может быть меньше 1");
    }
});