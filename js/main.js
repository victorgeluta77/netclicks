// menu
const leftMenu = document.querySelector('.left-menu');
const lesftMenuList = document.querySelector('.left-menu__list');
const hambutger = document.querySelector('.hamburger');

// open and close menu

hambutger.addEventListener('click',()=>{

    leftMenu.classList.toggle('openMenu');
    hambutger.classList.toggle('open');

});

// close menu when you click  outside menu
document.addEventListener('click',(event)=>{
    if (!event.target.closest('.left-menu ')){
        leftMenu.classList.remove('openMenu');
        hambutger.classList.remove('open');
    }
});


// open and close submenu when you click inside menu
leftMenu.addEventListener('click',(event)=>{
    let target = event.target;
    let dropdown = target.closest('.dropdown');
    
    if (dropdown){
        dropdown.classList.toggle('active');
        leftMenu.classList.add('openMenu');
        hambutger.classList.add('open');
    }

})