const title = document.querySelector('.navTitle');

title.addEventListener('click', ()=>{
   document.getElementsByTagName('nav')[0].className = 'menu menu_active';
   console.log(`Menu clicked`);
   
});

const close = document.querySelector('.menuClose');

close.addEventListener('click', ()=>{
   document.getElementsByTagName('nav')[0].className = 'menu'
   console.log(`Close clicked`);
   
});