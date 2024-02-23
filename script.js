const faqBt = document.querySelectorAll('.faq__question');
const faqIcon = document.querySelectorAll('.faq__icon');
const faqAnswer = document.querySelectorAll('.faq__answer');

for(let i=0; i<faqBt.length; i++){
    mostraOuDesmostraResposta(i)
}

function mostraOuDesmostraResposta(item){
    faqBt[item].addEventListener('click', () => {
        const valorSrc = faqIcon[item].getAttribute('src').split('/')[3];
        if(valorSrc === "icon-plus.svg"){
            showAnswer(item);
        }else{
            removeAnswer(item);
        }
    });    
}

function removeAnswer(item) {
    faqIcon[item].setAttribute('src', './assets/images/icon-plus.svg');
    faqAnswer[item].classList.remove("faq__answer--active");
}

function showAnswer(item) {
    faqIcon[item].setAttribute('src', './assets/images/icon-minus.svg');
    faqAnswer[item].classList.add("faq__answer--active");
}

