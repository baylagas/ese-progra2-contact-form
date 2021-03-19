const inputs = document.querySelectorAll(".input")

function focusFunction() {
    let parent = this.parentNode
    parent.classList.add("focus")
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunction)
    input.addEventListener("blur", blurFunction)
})