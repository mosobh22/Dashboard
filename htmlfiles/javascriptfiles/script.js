const menuBtn = document.querySelector('.btn');
const sidNav = document.querySelector('.sidnav');
const headNav = document.querySelector('.headnav');
const main = document.querySelector('.main');
menuBtn.addEventListener('click',showMenu);




function showMenu(){
    sidNav.classList.toggle('remov');
    console.log('we are in');
    if(sidNav.classList.contains('remov')){
        headNav.style.width = '100%';
        headNav.style.marginLeft = '0px';
        main.style.width = '100%';
        main.style.marginLeft = '0px';    
    }else{
        headNav.style.width='calc(100% - 200px)';
        headNav.style.marginLeft='200px';
        main.style.width='calc(100% - 200px)';
        main.style.marginLeft='200px';
        
    }
   
}