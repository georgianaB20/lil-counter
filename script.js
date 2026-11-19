
let count = 0;

const countDisplay = document.getElementById("count");

document.getElementById("increase").addEventListener("click", () => {
    count++;
    countDisplay.textContent = count;
});

document.getElementById("decrease").addEventListener("click", () => {
    count--;
    countDisplay.textContent = count;
});

document.getElementById("reset").addEventListener("click", () => {
    count = 0;
    countDisplay.textContent = count;
});
