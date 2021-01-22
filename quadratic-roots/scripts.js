'use strict';

let button = document.querySelector('.calculatorButton');

button.addEventListener('click', solveQuadraticEquation);

function solveQuadraticEquation() {
  let n1 =
    document.querySelector('#n1').value.length == 0 ? +'1' : document.querySelector('#n1').value;
  let n2 =
    document.querySelector('#n2').value.length == 0 ? +'1' : document.querySelector('#n2').value;
  let n3 = document.querySelector('#n3').value;

  let resultWrapper = document.createElement('div');
  resultWrapper.classList.add('calculator-wrapper');
  resultWrapper.classList.add('w-result');

  let D = Math.pow(+n2, 2) - 4 * +n1 * +n3;
  let radicalTitleOption = '';
  if (D == 0) {
    radicalTitleOption =
      'Так как дискриминант равен нулю то, квадратное уравнение имеет один действительный корень:';
  } else if (D > 0) {
    radicalTitleOption =
      'Так как дискриминант больше нуля то, квадратное уравнение имеет два действительных корня:';
  } else {
    radicalTitleOption =
      'Так как дискриминант меньше нуля, то уравнение не имеет действительных решений.';
  }
  let calculatorContent = document.createElement('div');
  calculatorContent.classList.add('calculator-content');
  calculatorContent.innerHTML = renderCalculatorContent(D, radicalTitleOption, n1, n2, n3);

  let radicalExpression = document.createElement('div');
  radicalExpression.classList.add('radical-expression');
  renderRadicalExpression(radicalExpression, D, n1, n2, n3);

  D > 0 || D == 0 ? calculatorContent.appendChild(radicalExpression) : false;
  resultWrapper.appendChild(calculatorContent);
  document.body.appendChild(resultWrapper);

  let test = document.querySelectorAll('.calculator-wrapper');
  let test2 = document.querySelector('.w-result');
  if (test.length > 2) {
    document.body.removeChild(test2);
  }
}

function renderCalculatorContent(d, radical, n1, n2, n3) {
  return `  
       <legend class="result-title">Решение</legend>
       <p class="rootsEquation-content">
         ${n1 == -1 ? '<span>' + '-' + '</span>' : ''}
         ${n1 == 0 || n1 == 1 || n1 == -1 ? '' : '<span>' + n1 + '</span>'}
         <span>x</span><sup>2</sup>
         <span>${n2 < 0 ? '&nbsp;-&nbsp;' : '&nbsp;+&nbsp;'}</span>
         ${n2 == 0 || n2 == 1 || n2 == -1 ? '' : '<span>' + Math.abs(+n2) + '</span>'}
         <span>x</span>
         ${n3.length > 0 ? '<span>&nbsp;+&nbsp;</span>' : ''}
         ${n3.length > 0 ? '<span>' + n3 + '</span>' : ''}
         <span>&nbsp;=&nbsp;</span>
         <span>0</span>
       </p>
       <p class="discriminant-title">Найдем дискриминант квадратного уравнения:</p>
       <p class="discriminant-content">
          <span>D</span>
          <span>&nbsp;=&nbsp;</span>
          <span>b</span>
          <sup>2</sup>
          <span>&nbsp;-&nbsp;</span>
          <span>4</span>
          <span>ac</span>
          <span>&nbsp;=&nbsp;</span>
          <span>${+n2}</span>
          <sup>2</sup>
          <span>&nbsp;-&nbsp;</span>
          <span>4&nbsp;·&nbsp;</span>${
            +n1 < 0 ? '<span>' + '(' + +n1 + ')' + '</span>' : '<span>' + +n1 + '</span>'
          }&nbsp;·&nbsp;${
    +n3 < 0 ? '<span>' + '(' + +n1 + ')' + '</span>' : '<span>' + +n3 + '</span>'
  }
          <span>&nbsp;=&nbsp;</span>
          <span>${Math.pow(+n2, 2)}</span>
          <span>${4 * +n1 * +n3 < 0 ? '&nbsp;+&nbsp;' : '&nbsp;-&nbsp;'}</span>
          <span>${4 * +n1 * +n3 < 0 ? Math.abs(4 * +n1 * +n3) : 4 * +n1 * +n3}</span>
          <span>&nbsp;=&nbsp;</span>
          <span class="discriminant-content__result">${d}</span>
        </p>
        <p>${radical}</p>`;
}

function renderRadicalExpression(radicalExp, D, n1, n2, n3) {
  if (D > 0) {
    radicalExp.innerHTML = `<div>
         <span>x</span><sub>1</sub>
         <span>&nbsp;=&nbsp;</span>
         <div class="frac">
           <span>
           ${n2 == 0 || n2 == -1 ? '' : '<span>' + -n2 + '</span>'} - 
             <span>√</span><span class="radical-number">${D}</span>
           </span>
           <span class="symbol">/</span>
           <span class="bottom">2·${
             +n1 < 0 ? '<span>' + '(' + +n1 + ')' + '</span>' : '<span>' + +n1 + '</span>'
           }</span>
         </div>
         <span>&nbsp;≈&nbsp;</span>
         <span>${(-n2 - Math.sqrt(D)) / (2 * +n1)}</span>
         </div>
        
         <div>
         <span>x</span><sub>2</sub>
         <span>&nbsp;=&nbsp;</span>
         <div class="frac">
           <span>
           ${n2 == 0 || n2 == -1 ? '' : '<span>' + -n2 + '</span>'} + 
             <span>√</span><span class="radical-number">${D}</span>
           </span>
           <span class="symbol">/</span>
           <span class="bottom">2·${
             +n1 < 0 ? '<span>' + '(' + +n1 + ')' + '</span>' : '<span>' + +n1 + '</span>'
           }</span>
         </div>
         <span>&nbsp;≈&nbsp;</span>
         <span>${(-n2 + Math.sqrt(D)) / (2 * +n1)}</span>
         </div>`;
  } else if (D == 0) {
    radicalExp.innerHTML = `         <span>x</span>
         <span>&nbsp;=&nbsp;</span>
         <div class="frac">
           <span>
           ${n2 == 0 || n2 == -1 ? '' : '<span>' + -n2 + '</span>'} - 
             <span>√</span><span class="radical-number">${D}</span>
           </span>
           <span class="symbol">/</span>
           <span class="bottom">2·${
             +n1 < 0 ? '<span>' + '(' + +n1 + ')' + '</span>' : '<span>' + +n1 + '</span>'
           }</span>
         </div>
         <span>&nbsp;≈&nbsp;</span>
         <span>${(-n2 - Math.sqrt(D)) / (2 * +n1)}</span>`;
  }
}
