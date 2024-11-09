let menu = document.querySelector('.menu');
let close = document.querySelector('.close-icon')
let dropMenu = document.querySelector('.drop-menu')

menu.onclick = () =>{
    dropMenu.style.display = 'flex';
};

close.onclick = () =>{
    dropMenu.style.display = 'none';
};

let swicherBtn = document.querySelectorAll('.swicher button');
let portfolio = document.querySelectorAll('.portfolio div');

swicherBtn.forEach((e) =>{
    e.addEventListener("click",removeActive)
    e.addEventListener("click",controll)
})


function removeActive(){
    swicherBtn.forEach((e) =>{
        e.classList.remove("active");
        this.classList.add("active")
    })
};
function controll(){
    portfolio.forEach((e) =>{
        e.style.display = 'none';
    })
    document.querySelectorAll(this.dataset.src).forEach((e) =>{
        e.style.display = 'flex'
    })
}