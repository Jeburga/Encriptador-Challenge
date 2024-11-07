// Variables
const encryptBtn = document.querySelector(".encrypt");
const decryptBtn = document.querySelector(".decrypt");
const copyBtn = document.querySelector(".copy");
const textInput = document.querySelector(".text-input");
const resultText = document.querySelector(".result-text");
const placeholderImg = document.querySelector(".placeholder-img");
const placeholderText = document.querySelector(".placeholder-title");

// Listeners
encryptBtn.addEventListener("click", () => handleText(encrypt));
decryptBtn.addEventListener("click", () => handleText(decrypt));
copyBtn.addEventListener("click", copyToClipboard);

// Functions
function handleText(transformFn) {
    const input = textInput.value.trim();
    if (!input) return;

    const transformedText = transformFn(input);
    resultText.textContent = transformedText;
    togglePlaceholder(false);
}

function togglePlaceholder(show) {
    placeholderImg.style.display = show ? "block" : "none";
    placeholderText.style.display = show ? "block" : "none";
}

function encrypt(text) {
    return text
        .replace(/a/g, "ai")
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function decrypt(text) {
    return text
        .replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function copyToClipboard() {
    navigator.clipboard.writeText(resultText.textContent || "");
    Swal.fire("Texto copiado al portapapeles!");
}
