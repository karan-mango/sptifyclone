const offscreenmenu=document.querySelector('.off-screen-menu');
const hamMenu=document.querySelector('.hamburgur-menu');

hamMenu.addEventListener('click', ()=>{
    hamMenu.classList.toggle('active');
    offscreenmenu.classList.toggle('active');
})