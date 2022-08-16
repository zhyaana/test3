const colors = ['#4AB4EB', '#34EB5F' , '#47F670' , '#E2EB28' ];
const colos = [ '#4AB4EB' ];

const quots =['We love the way AWEN  has madeour lifes easier' , 'I would happily recommend AWEN to any one which has a requirement for an online booking or reservation system.' , 'AWEN MINDS is a powerful online booking system where you can build your own rental reservation service online that fits your branding and business model”' ];

const interactDOM = document.querySelector('#interact');
const container = document.querySelector('.slide-container');
 let randomColor = Math.floor(Math.random()*colos.length);
 interactDOM.style.background = colos[randomColor];
  container.innerHTML = quots.map((quot , slideIndex)=>{
    let position = 'next';

    if(slideIndex === 0){
        position = 'active';
    }
    if(slideIndex === quots.length-1){
        position = 'last'
    }

    if(quots.length <= 1){
        position = 'active';
    }
    
    return ` <article class="slide ${position}">
    <h6 class="quot"> “ ${quot} ” </h6>
   </article>`

}).join('');


const startSlider=(type)=>{
// get all three slides active last next;

const active = document.querySelector('.active')
const last = document.querySelector('.last')
let next = active.nextElementSibling;

if(!next){
    next= container.firstElementChild;
}

active.classList.remove('active')
last.classList.remove('last')
next.classList.remove('next')

if(type === 'prev'){
    active.classList.add('next');
    last.classList.add('active');
    next =last.previousElementSibling;

    if(!next){
        next= container.lastElementChild;
    }

    next.classList.remove('next');
    next.classList.add('last');
    return;
}

active.classList.add('last');
last.classList.add('next')
next.classList.add('active');
active.classList.add('last');

}

setInterval(() => {
    randomColor = Math.floor(Math.random()*colos.length);
    interactDOM.style.background = colos[randomColor];
    startSlider();
}, 9000);


 window.addEventListener('load' , startSlider);



