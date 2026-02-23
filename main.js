const mailRndm = 'https://flynn.boolean.careers/exercises/api/random/mail'

const buttonEl = document.querySelector('button');
const mailListEl = document.querySelector('ul');

buttonEl.addEventListener('click',function(){

        for(let i = 0; i < 10; i++){
                
                fetch(mailRndm)
                .then(responce => responce.json())
                .then(mail => {
                    mailListEl.innerHTML += `<li>${mail.response}</li>`
                })

            }

});

