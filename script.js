
const toggle = document.querySelector('.toggle');
const closeModel = document.querySelector('.close_model');
const navbarModel = document.querySelector('.navbar_model');
toggle.addEventListener("click" , e=>{
   navbarModel.classList.add('show-model');
})

closeModel.addEventListener("click" , e=>{
    navbarModel.classList.remove('show-model');
})


// above link
const lineAbove = document.querySelector('.line_above');
const closeLine = document.querySelector('.close-line');

closeLine.addEventListener('click' , e=>{
    lineAbove.classList.add('hide');
})


// testimonial
import data from './team.js';

const Tcontainer = document.querySelector('.slider');
const TnextBtn = document.querySelector('.next-btn');
const Tprevbtn = document.querySelector('.prev-btn');

if(data.length === 1){
    TnextBtn.style.display = 'none';
    Tprevbtn.style.display = 'none';
}

// if length is 2 , add copies of slides

let people = [...data];

if(data.length === 2){
    people = [...data , ...data];
}

Tcontainer.innerHTML = people.map((person , slideIndex)=>{
    const {img , name , job , text} = person

    let position = 'Tnext';

    if(slideIndex === 0){
        position = 'Tactive';
    }
    if(slideIndex === people.length-1){
        position = 'Tlast'
    }

    if(data.length <= 1){
        position = 'Tactive';
    }
    
    return `<article class="t-slide ${position}">
    <img src="${img}" alt="">

<div class="info">
    <h4>${name}</h4>
    <h2 class="city">${job}</h2>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
    <p class="word">${text}</p>
    </div>
</article> `

}).join('');


const cuorosal=(type)=>{
// get all three slides active last next;

const Tactive = document.querySelector('.Tactive')
const Tlast = document.querySelector('.Tlast')
let Tnext = Tactive.nextElementSibling;

if(!Tnext){
    Tnext= Tcontainer.firstElementChild;
}

Tactive.classList.remove('Tactive')
Tlast.classList.remove('Tlast')
Tnext.classList.remove('Tnext')

if(type === 'prev'){
    Tactive.classList.add('Tnext');
    Tlast.classList.add('Tactive');
    Tnext =Tlast.previousElementSibling;

    if(!Tnext){
        Tnext= Tcontainer.lastElementChild;
    }

    Tnext.classList.remove('Tnext');
    Tnext.classList.add('Tlast');
    return;
}

Tactive.classList.add('Tlast');
Tlast.classList.add('Tnext')
Tnext.classList.add('Tactive');
Tactive.classList.add('Tlast');

}

TnextBtn.addEventListener('click', ()=>{
  cuorosal();
})

Tprevbtn.addEventListener('click', ()=>{
    cuorosal('prev');
    })
