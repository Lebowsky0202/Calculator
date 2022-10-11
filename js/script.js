const resultInput = document.querySelector('.textarea'),
      buttons = document.querySelectorAll('.calc__btn');
      
function resultElem(){
    console.log(eval(resultInput.textContent));
    resultInput.textContent = eval(resultInput.textContent);

}

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        console.log(btn.innerText);
        if(btn.innerText != '=' && btn.innerText != 'C'){
            resultInput.textContent += btn.innerText;
        }
        if(btn.innerText == '='){
            resultElem();
        }else if(btn.innerText == 'C'){
            resultInput.textContent = '';
        }
    });
});

