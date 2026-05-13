document.addEventListener('DOMContentLoaded', () => {
    const faqButtons = document.querySelectorAll('.faq-button');

    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const icon = button.querySelector('.faq-icon');
            const isExpanded = button.getAttribute('aria-expanded') === 'true';

            // Passo 1: Fecha todas as outras perguntas antes de abrir a clicada
            faqButtons.forEach(btn => {
                if (btn !== button) {
                    btn.setAttribute('aria-expanded', 'false');
                    btn.nextElementSibling.classList.remove('grid-rows-[1fr]');
                    btn.nextElementSibling.classList.add('grid-rows-[0fr]');
                    btn.querySelector('.faq-icon').classList.remove('rotate-180');
                }
            });

            // Passo 2: Abre ou fecha a pergunta que o usuário clicou
            if (!isExpanded) {
                // Abrir
                button.setAttribute('aria-expanded', 'true');
                content.classList.remove('grid-rows-[0fr]');
                content.classList.add('grid-rows-[1fr]');
                icon.classList.add('rotate-180');
            } else {
                // Fechar
                button.setAttribute('aria-expanded', 'false');
                content.classList.remove('grid-rows-[1fr]');
                content.classList.add('grid-rows-[0fr]');
                icon.classList.remove('rotate-180');
            }
        });
    });
});