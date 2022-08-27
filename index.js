document.addEventListener("DOMContentLoaded", changeText)
function changeText() {
    let newText = document.getElementById("text");
    newText.textContent = "This is really cool!";
}