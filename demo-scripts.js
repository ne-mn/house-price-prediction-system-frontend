let count = 0;

const counterText = document.getElementById("countertex");
const incrementButton = document.getElementById("inc");
const decrementButton = document.getElementById("dec");

incrementButton.addEventListener("click", function () {
    count = count + 1;
    counterText.textContent = "Count: " + count;
});

decrementButton.addEventListener("click", function () {
    count = count + 1;
    counterText.textContent = "Count: " + count;
});