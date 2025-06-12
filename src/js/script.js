import '/src/sass/style.scss';
import 'purecss/build/grids-min.css';
import 'purecss/build/grids-responsive-min.css';


const headers = document.querySelectorAll('.accordion__header');

const accordion = item => {
    item.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;

            const isOpen = content.classList.contains('show');

            document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('show'));

            !isOpen ? content.classList.add('show') : content.classList.remove('show')

        })
    })
}

accordion(headers)