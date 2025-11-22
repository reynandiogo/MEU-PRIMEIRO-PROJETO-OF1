const menuburguer = document.getElementById('menuburguer')
const menuX = document.getElementById('menuX')
const menunav = document.getElementById('menunav')

//ANIMAÇÕES PARA O MENU ENTRAR__________________________________________________________________________________________


menuburguer.addEventListener('click', () => {

    menuburguer.style.display= 'none'
    menuX.style.display= 'block'

    if (!menunav.classList.contains('ativada')) {
        menunav.classList.toggle('ativada');
    }
    
});

//fim

function toggleMenuburguer() {

  if (window.innerWidth < 700) {

    if (!menunav.classList.contains('ativada')) {
        menuburguer.style.display = "block";
    }

  } 

}

toggleMenuburguer();

window.addEventListener("resize", toggleMenuburguer);

//fim

function toggleMenuburguer2() {

  if (window.innerWidth > 700) {

    menuburguer.style.display = "none";

  } 

}

toggleMenuburguer2();

window.addEventListener("resize", toggleMenuburguer2);

//____________________________________________________________________________________________________________________


//ANIMAÇÕES PARA O MENU SAIR__________________________________________________________________________________________


menuX.addEventListener('click', () => {

    menuburguer.style.display= 'block'
    menuX.style.display= 'none'

    if (menunav.classList.contains('ativada')) {
        menunav.classList.toggle('ativada');
    }
    
});

//fim

function toggleMenuX() {

  if (window.innerWidth > 700) {
    menuX.style.display = "none";
  } 
  
}

toggleMenuX();

window.addEventListener("resize", toggleMenuX);

//fim

function toggleMenuX2() {

  if (window.innerWidth < 700) {

    if (menunav.classList.contains('ativada')) {
        menuX.style.display = "block";
    }

  } 

}

toggleMenuX2();

window.addEventListener("resize", toggleMenuX2);

//____________________________________________________________________________________________________________________
