
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.inIntersecting){
            entry.target.classList.add("show")
        } else {
            entry.target.classList.remove("show")
        }
    })
})

const elements = document.querySelectorAll(".hidden")

elements.forEach((element) => myObserver.observe(element))

document.getElementById("contact-form").addEventListe("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);
        document.getElementById('contact-form').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

