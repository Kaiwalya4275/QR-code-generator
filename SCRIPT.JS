const input = document.getElementById("text");
const button = document.getElementById("generate");
const qrImage = document.getElementById("qr-image");
const qrContainer = document.getElementById("qr-container");

button.addEventListener("click", () => {
    const text = input.value.trim();
    if (text !== "") {
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}`;
        qrImage.style.display = "block";
        qrContainer.classList.add("show");
    }
});
