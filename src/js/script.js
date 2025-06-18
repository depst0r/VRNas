import '/src/sass/style.scss';
import 'purecss/build/grids-min.css';
import 'purecss/build/grids-responsive-min.css';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


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

//SLIDER

new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: '.icon-right-open',
        prevEl: '.icon-left-open'
    },
    loop: true,
})

accordion(headers)