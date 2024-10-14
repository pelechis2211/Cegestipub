/*Header - Menu*/

window.onscroll = function() {

    scroll = document.documentElement.scrollTop;

    header = document.getElementById("header");

    if(scroll > 20){
        header.classList.add('nav_mod');
        header.style.backgroundColor = 'rgb(250, 253, 245, 0.75)';
    }else if(scroll < 20){
        header.classList.remove('nav_mod');
        header.style.backgroundColor = 'transparent';
    } 
}

/*Menu hamburger*/
const hamburger = document.getElementById('hamburger');
    const header = document.querySelector('header');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        header.classList.toggle('active');
});


/*Nuestra misión y visión*/

function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const isOpen = content.style.display === "block";

    if (isOpen) {
        content.style.display = "none";
        element.querySelector('.arrow').textContent = '⬇';
        element.classList.remove('active');
    } else {
        content.style.display = "block";
        element.querySelector('.arrow').textContent = '⬆';
        element.classList.add('active');
    }
}



/*Programa de Estudios*/
var swiper = new Swiper(".slide-container", {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    centerSlider: true,
    fade: true,
    grabCursor: true,
    //loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clicKable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 4,
        },
    },
});




