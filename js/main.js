var menu = document.getElementById("toggle-menu");
menu.style.height="0%";

function  toggleBtn(){
    if(menu.style.height==="0%")
    {
        menu.style.height="85vh"
    }
    else{
        menu.style.height="0%"
    }
}

// -----------AOS------------
AOS.init();