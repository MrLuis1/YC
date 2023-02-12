const $btnMenu = document.querySelector('.hamburger'),
$menu = document.querySelector('.menu');

$btnMenu.addEventListener('click', e => {
    $btnMenu.classList.toggle('is-active');
    $menu.classList.toggle('is-active');
})

document.addEventListener('click', e => {
    if(!e.target.matches('.menu a')) return false

    $btnMenu.classList.remove('is-active');
    $menu.classList.remove('is-active');
})