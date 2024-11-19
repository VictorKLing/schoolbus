//abre e fecha os horarios
document.querySelectorAll('.toggleButton').forEach(button => {
  button.addEventListener('click', function () {
    const content = this.parentElement.nextElementSibling;
    const arrowIcon = this.querySelector('.arrowIcon');

    if (content.classList.contains('max-h-0')) {
      content.classList.remove('max-h-0');
      content.classList.add('max-h-[999px]'); 
      arrowIcon.classList.add('rotate-180');
      this.setAttribute('aria-expanded', 'true');
    } else {
      content.classList.remove('max-h-[999px]');
      content.classList.add('max-h-0');
      arrowIcon.classList.remove('rotate-180');
      this.setAttribute('aria-expanded', 'false');
    }
  });
});

//popup 
const popup = document.querySelector('#popup')
const closePopup = document.querySelector('#close-popup')
const popupContent = document.querySelector('#popup-content')


//exibe o popup quando abrir o site
addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    popup.classList.remove('hidden')
    const popupAtivo = !popup.classList.contains('hidden');
    if(popupAtivo){
      document.body.style.overflow = 'hidden';
    }
  }, 2000);
})


//fechar o popup pelo botão
closePopup.addEventListener('click', () => {
  popup.classList.add('hidden')
  document.body.style.overflow = '';
})


//fechar o popup quando o clique for fora do conteudo
popup.addEventListener('click', (event) => {
  if(!popupContent.contains(event.target)){
    popup.classList.add('hidden')
    document.body.style.overflow = '';
  }
})


// selecionar escola
const optionMenu = document.querySelector('.select-menu');
const selectBtn = optionMenu.querySelector('.select-btn');
const options = optionMenu.querySelectorAll('.option');
const sBtn_text = optionMenu.querySelector('.sBtn-text');
const boxOptions = document.querySelector('.options');
const seta = document.querySelector('#seta-selecionar-escola');

selectBtn.addEventListener('click', () => {
  boxOptions.classList.toggle('hidden');
  selectBtn.classList.contains('bg-[#E54500]')
  ? selectBtn.classList.replace('bg-[#E54500]', 'bg-[#0069AC]')
  : selectBtn.classList.replace('bg-[#0069AC]', 'bg-[#E54500]');
  seta.classList.toggle('rotate-180');
});

options.forEach(option => {
  option.addEventListener('click', () => {
    let selectedOption = option.innerText;
    sBtn_text.innerHTML = selectedOption;
    boxOptions.classList.toggle('hidden');
    selectBtn.classList.replace('bg-[#0069AC]', 'bg-[#E54500]');
    seta.classList.toggle('rotate-180');
  });
});
