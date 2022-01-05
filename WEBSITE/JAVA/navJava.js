var navpromt = document.querySelector('.lanbut')
var navmenu = document.querySelector('nav')

var clicked = false;

navpromt.onclick = function(){
    if (clicked == false){
        navmenu.classList.remove('notactive');
        navmenu.classList.add('active');
        clicked = true;
    }else{
        navmenu.classList.remove('active');
        navmenu.classList.add('notactive');
        clicked = false; 
    }
}

