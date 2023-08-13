var menuicon = document.querySelectorAll('.menu_icon')

menuicon[0].addEventListener('click', ()=>{
    let menu = document.getElementById('menu')
    if(menu.classList.contains('mostrar')){
        menu.classList.add('apagar');
        menu.classList.remove('mostrar');
    }else{
        menu.classList.add('mostrar');
        menu.classList.remove('apagar');
    }
});
