// Menu Mobile Toggle
        const btn = document.getElementById('menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            const expanded = !menu.classList.contains('hidden');
            btn.setAttribute('aria-expanded', String(expanded));
            menu.setAttribute('aria-hidden', String(!expanded));
        });

                document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();

                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);

                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80, // O "- 80" evita que o header cubra o conteúdo
                            behavior: 'smooth'
                        });
                        
                        // Fecha o menu mobile se estiver aberto (opcional)
                        const mobileMenu = document.getElementById('mobile-menu');
                        if (!mobileMenu.classList.contains('hidden')) {
                            mobileMenu.classList.add('hidden');
                            btn.setAttribute('aria-expanded', 'false');
                            mobileMenu.setAttribute('aria-hidden', 'true');
                        }
                    }
                });
            });