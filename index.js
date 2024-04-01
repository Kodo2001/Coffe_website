let search = document.querySelector('.search-box'); // awa search boxakaya ka searche lanaw dakaen */

let search_icon= document.querySelector('#search-icon'); // awa search iconakaya away wak zarabena*/

search_icon.onclick = ()=>{ //lera gutuma agar clickm la search iconaka krd ba la (search boxaka) classe active zyad bet u eshe pe bkret ka dubara clickm le krdawa awjara ba classe active aka remove bet bamshewaya search baraka dyar namenetawa balam esa lera gutuma ka clikm la search iconaka krd u classe active bo zya bu ba clase active la navbaraka bsrdretawa
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

// awja ba beyn katy clickman la burger botnaka krd ba wabkaen navbaraka neshanbdat awesh ba zyakrdne classek banawe clase active //

let navbar = document.querySelector('.navbar'); // awa navbarakamana 

let menu_icon = document.querySelector('#menu-icon'); //awa menu iconakaya
menu_icon.onclick = ()=>{ //gutuma kate cklickm la menu iconaka krd ba classe active bo navbaraka zyad be wa ka aw clssa bo navbaraka zya bu ba classe active la search baraka rashbetawa
    navbar.classList.toggle('active'); 
    search.classList.remove('active');
}



window.onscroll=()=>{ // wata kate ka scrolm krd ba classe active la navbar u la searchbar delete bbet ya bashewake de wata ba search bar u navbarakay burger buttonaka ba labchn lasar shasha
    navbar.classList.remove('active');
    search.classList.remove('active');
}