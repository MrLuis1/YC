const $container = document.querySelector('.modal-container')

document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.modal').forEach(modal => {
            if(card.getAttribute('id') === modal.getAttribute('data-target')){
                $container.classList.add('active');
                modal.classList.add('active');

                const imGroup = [...modal.children[2].childNodes[3].children];
                const selectedImg = modal.children[2].childNodes[1].children[0].children[0];
                let defaultImg = modal.children[2].childNodes[1].children[0].children[0].getAttribute('src')
                console.log(defaultImg)
                imGroup.forEach(image => {
                    image.addEventListener('mouseover', (e) => {
                        let src = e.target.getAttribute('src');
                        selectedImg.setAttribute('src', src)
                    });

                    image.addEventListener('mouseout', () => {
                        setTimeout(()=> {
                            if(selectedImg.getAttribute('src')) selectedImg.setAttribute('src', defaultImg)
                        },2500)
                    })
                });

                const closeBtn = modal.children[0].children[1];
                closeBtn.addEventListener('click', () => {
                    $container.classList.remove('active');
                    modal.classList.remove('active');
                });
            };
        });
    });
});