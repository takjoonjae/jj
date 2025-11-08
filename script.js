const form = document.getElementById('contact-form');
const thankYou = document.getElementById('thank-you');


form.addEventListener('submit', (e) => {
e.preventDefault();
if (!form.checkValidity()) {
form.reportValidity();
return;
}
form.reset();
thankYou.hidden = false;
setTimeout(() => {
thankYou.hidden = true;
}, 3000);
});