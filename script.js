// Toggle between light and dark mode
document.getElementById("toggleTheme").addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
    document.body.classList.toggle("dark-mode");
});

// Function to append values to the display
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Function to delete the last character
function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.toString().slice(0, -1);
}

// Function to evaluate the expression
function calculateResult() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
