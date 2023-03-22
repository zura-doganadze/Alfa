const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header-nav-menu");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})






// section 1 

const firstProductConteiners = [...document.querySelectorAll('.first-product-conteiner')]

const nxtBtn = [...document.querySelectorAll('.first-section-nxd-btn-conteiner')]
const preBtn = [...document.querySelectorAll('.first-section-pre-btn-conteiner')]


firstProductConteiners.forEach((item, i) => {
    let conteinerDimensions = item.getBoundingClientRect();
    let conteinerWidth = conteinerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += conteinerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= conteinerWidth;
    })
})