document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("actionButton");
    const textBoxes = document.querySelectorAll(".text-box");
    const photos = document.querySelectorAll(".photo");

    // Ação 1: Clique no botão
    button.addEventListener("click", function() {
        alert("Botão clicado!");
        textBoxes.forEach((box, index) => {
            box.textContent = "Texto atualizado " + (index + 1);
        });
    });

    // Ação 2: Mouse sobre as fotos
    photos.forEach(photo => {
        photo.addEventListener("mouseenter", function() {
            this.style.border = "5px solid red";
        });

        photo.addEventListener("mouseleave", function() {
            this.style.border = "none";
        });
    });

    // Ação 3: Clique nas caixas de texto
    textBoxes.forEach(box => {
        box.addEventListener("click", function() {
            this.style.backgroundColor = "#ff0";
        });
    });
});