let cartCount = 0;

const cartDisplay = document.getElementById("cart-count");
const buttons = document.querySelectorAll(".add-btn");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        cartCount++;
        cartDisplay.textContent = cartCount;
    });
