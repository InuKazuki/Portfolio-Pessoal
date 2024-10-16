// script.js

// Exemplo de funcionalidade simples de alerta ao enviar formulário
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Formulário enviado com sucesso!');
        }); 
    }
});