const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const navLinks = document.getElementById("mainMen").querySelectorAll("li");
var bars = document.getElementById("bars");


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);
// To make the nav close when a nav link is clicked
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click',close);
  }

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
    bars.style.display = "none";
}
function close(){
    mainMenu.style.top = '-100%';
    bars.style.display = "block";
}