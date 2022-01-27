const images = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg',
];

let slides = '';
let bullets = '';

for (let i = 0; i < images.length; i++) {

    slides +=  `<div class="item">
                    <img src="${images[i]}">
                </div>`;

    bullets += `<div class="circle"></div>`;

}

//creo le slide
let itemsContainer = document.querySelector('.items-container');
itemsContainer.innerHTML = slides;

//creo i pallini
let circleContainer = document.querySelector('.circle-container');
circleContainer.innerHTML = bullets;

//inizializzo una variabile che mi tenga traccia della slide attiva
let currentSlide = 0;
console.log('Sono nella slide numero:' + currentSlide);

//recupero tutte le slide, ed alla prima aggiungo la classe active
let items = document.getElementsByClassName('item');
items[currentSlide].classList.add('active');

//recupero tutti i circle, ed al primo aggiungo la classe active
let circles = document.getElementsByClassName('circle');
circles[currentSlide].classList.add('active');


//gestisco il click su slide seguente
let next = document.querySelector('.next');
next.addEventListener('click', 
    function() {

        if (currentSlide < items.length - 1) {

            items[currentSlide].classList.remove('active');
            circles[currentSlide].classList.remove('active');

            console.log('Ero nella slide numero:' + currentSlide);

            currentSlide++; //vado alla slide seguente

            console.log('Mi sposto nella slide numero:' + currentSlide);

            items[currentSlide].classList.add('active');
            circles[currentSlide].classList.add('active');

        } else {

            items[currentSlide].classList.remove('active');
            circles[currentSlide].classList.remove('active');

            currentSlide = 0; //vai alla prima slide!

            items[currentSlide].classList.add('active');
            circles[currentSlide].classList.add('active');

        }
    }
);

//gestisco il click su slide precedente
let prev = document.querySelector('.prev');
prev.addEventListener('click', 
    function() {

        if (currentSlide > 0) {
            items[currentSlide].classList.remove('active');
            circles[currentSlide].classList.remove('active');

            console.log('Ero nella slide numero:' + currentSlide);

            currentSlide--; //vado alla slide precedente

            console.log('Mi sposto nella slide numero:' + currentSlide);

            items[currentSlide].classList.add('active');
            circles[currentSlide].classList.add('active');

        } else {

            items[currentSlide].classList.remove('active');
            circles[currentSlide].classList.remove('active');
            
            currentSlide = items.length - 1;

            items[currentSlide].classList.add('active');
            circles[currentSlide].classList.add('active');

        }
    }
);


