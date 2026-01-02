export function initNavigation(){
    const navToggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.menu-links');

    navToggle.addEventListener('click', ()=>{
        links.classList.toggle('show-links');
    });

    //close when we click on a link
    links.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => links.classList.remove('show-links'));
    });
}