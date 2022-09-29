const resultInput = document.querySelector('.textarea'),
      buttons = document.querySelectorAll('.calc__btn'),
      divideBtn = document.querySelector('.calc__btn_divide'),
      multiplyBtn = document.querySelector('.calc__btn_multiply'),
      minusBtn = document.querySelector('.calc__btn_minus'),
      cBtn = document.querySelector('.calc__btn_c'),
      sevenBtn = document.querySelector('.calc__btn_seven'),
      eightBtn = document.querySelector('.calc__btn_eight'),
      nineBtn = document.querySelector('.calc__btn_nine'),
      plusBtn = document.querySelector('.calc__btn_plus'),
      fourBtn = document.querySelector('.calc__btn_four'),
      fiveBtn = document.querySelector('.calc__btn_five'),
      sixBtn = document.querySelector('.calc__btn_six'),
      smoothBtn = document.querySelector('.calc__btn_smooth'),
      oneBtn = document.querySelector('.calc__btn_one'),
      twoBtn = document.querySelector('.calc__btn_two'),
      threeBtn = document.querySelector('.calc__btn_three'),
      zeroBtn = document.querySelector('.calc__btn_zero'),
      doubleZeroBtn = document.querySelector('.calc__btn_double-zero'),
      dotBtn = document.querySelector('.calc__btn_c');
      
function resultElem(btn){
    if(btn === '='){
        console.log();
    }
}

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        resultInput.textContent += btn.innerText;
        if(btn.innerText == '='){
            console.log(+resultInput.textContent);
            resultInput.textContent = '';
        }
    });
});

