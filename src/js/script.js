import '/src/sass/style.scss';
import 'purecss/build/grids-min.css';
import 'purecss/build/grids-responsive-min.css';

import Swiper from 'swiper';
// import Swiper, { Scrollbar } from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


//!ACCORDION
const headers = document.querySelectorAll('.accordion__header');

const accordion = item => {
    item.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;

            const isOpen = content.classList.contains('show')

            document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('show'))

            !isOpen ? content.classList.add('show') : content.classList.remove('show')

        })
    })
}

//!SLIDER

const slider = new Swiper('.slider', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: false,
    },

    navigation: {
        prevEl: '.slider__controls-right',
        nextEl: '.slider__controls-left',
    },
    loop: true,
})

// //!SCROLLBAR

// const scroll = new Swiper('.myScrollbar', {
//     modules: [Scrollbar],
//     direction: "vertical",
//     slidesPerView: "auto",
//     freeMode: true,
//     scrollbar: {
//         el: ".swiper-scrollbar",
//     },
//     mousewheel: true,
// })

accordion(headers)