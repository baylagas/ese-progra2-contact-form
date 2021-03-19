const inputs = document.querySelectorAll(".input")

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunction)
    input.addEventListener("blur", blurFunction)
})