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
        const loading = document.querySelector('modal__overlay--loading');
        const success = document.querySelector('modal__overlay--success');
        setTimeout(() => {
            console.log('this worked')
        }, 200);

} 