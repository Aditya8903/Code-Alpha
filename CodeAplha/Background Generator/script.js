const colorDisplay = document.getElementById("colorDisplay");
const generateButton = document.getElementById("generateButton");
const copyButton = document.getElementById("copyButton");
const colorInput = document.getElementById("colorInput");

function colorChanger() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

generateButton.addEventListener("click", () => {
    const randomColor = colorChanger();
    document.body.style.backgroundColor = randomColor;
    colorDisplay.style.backgroundColor = randomColor;
    colorDisplay.querySelector("#currentColor").textContent = randomColor;
    colorInput.value = randomColor;
});

copyButton.addEventListener("click", () => {
    const colorCode = colorInput.value;
    colorInput.select();
    document.execCommand("copy");
    alert(`Copied: ${colorCode}`);
});
