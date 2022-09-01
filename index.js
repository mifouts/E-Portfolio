// template_lya0z0l
// service_8bgbkyi
// E709MmtjUQvYhM8xQ

let contrastToggle = false;

const scaleFactor = 1/20;
function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    
    for (let i = 0; i < shapes.length; ++i) {
        shapes[i].style.transform = `translate(${x}px, ${y}px)`;
}
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle){
    document.body.classList += " dark-theme";
    }
    else {
        document.body.classList.remove("dark-theme");
    }
}

function contact(event) {
    event.preventDefault();
    emailjs
        .sendForm(
            'service_8bgbkyi',
            'template_lya0z0l',
            event.target,
            'E709MmtjUQvYhM8xQ'
        ).then(() => {
            console.log('this worked')
        })
        const loading = document.querySelector('.modal__overlay--loading');
        const success = document.querySelector('.modal__overlay--success');
        loading.classList += " modal__overlay--visible";
        setTimeout(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
            console.log('this worked')
        }, 200);

} 

let isModalOpen = false;

function toggleModal(){
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}