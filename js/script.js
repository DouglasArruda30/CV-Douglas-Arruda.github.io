document.addEventListener("DOMContentLoaded", function() {
    // Saudação
    const saudacaoBtn = document.getElementById("saudacao-btn");
    const mensagem = document.getElementById("mensagem");

    if (saudacaoBtn) {
        saudacaoBtn.addEventListener("click", function() {
            mensagem.textContent = "Olá! Bem-vindo ao meu portfólio!";
        });
    }

    // Efeitos de hover nos botões
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("mouseover", function() {
            button.style.transform = "scale(1.1)";
        });
        button.addEventListener("mouseout", function() {
            button.style.transform = "scale(1)";
        });
    });

    // Animações de entrada
    const sections = document.querySelectorAll(".hover-effect");
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(20px)";
        setTimeout(() => {
            section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }, 200);
    });
});