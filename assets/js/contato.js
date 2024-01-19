
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita o envio padrão do formulário

        const nome = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('contactForm').value;

        // Substitua "seu_numero" pelo número de telefone para o qual você deseja enviar a mensagem
        const numeroWhatsApp = '+5511983090838';
        
        const mensagemWhatsApp = `Nome: ${nome}%0AEmail: ${email}%0AServiço: ${subject}%0AMensagem: ${message}`;

        const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensagemWhatsApp}`;

        window.open(linkWhatsApp, '_blank');
    });
});

