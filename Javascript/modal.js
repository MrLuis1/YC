const $container = document.querySelector('.modal-container')

document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.modal').forEach(modal => {
            if(card.getAttribute('id') === modal.getAttribute('data-target')){
                $container.classList.add('active');
                modal.classList.add('active');
                const closeBtn = modal.children[0].children[0];
                closeBtn.addEventListener('click', () => {
                    $container.classList.remove('active');
                    modal.classList.remove('active');
                });
            };
        });
    });
});