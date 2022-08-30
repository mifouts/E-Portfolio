// template_lya0z0l
// service_8bgbkyi
// E709MmtjUQvYhM8xQ

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