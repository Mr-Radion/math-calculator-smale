'use strict';

function findCommonFactorsGreatest() {
  let n1 = document.getElementById('n1').value;
  let n2 = document.getElementById('n2').value;
    
  let calculatorWrapper = document.createElement('div');
  calculatorWrapper.className = 'calculator-wrapper'; 
  calculatorWrapper.classList.add('resultWrapper');
    
  let calculatorContent = document.createElement('div');
  calculatorContent.classList.add('calculator-content');
  
  let commonFactors = document.createElement('div');
  commonFactors.className = 'common-factors';
  commonFactors.innerHTML = '<legend class="result-title">Наибольший общий делитель</legend>';
  commonFactors.innerHTML = commonFactors.innerHTML + renderCommonFactorsGreatest(n1, n2);
    
  calculatorWrapper.appendChild(calculatorContent);   
  calculatorContent.appendChild(commonFactors);   
  document.body.appendChild(calculatorWrapper);   
    
  removeDuplicationElement();
}

function renderCommonFactorsGreatest(n1, n2) {
  let arr1 = [];    
  let arr2 = [];    
  let result = '';
       
  for (let i = 0; i<=n1; i++) {
    if (n1 % i == 0) {
      arr1.push(i);
    }
  }  
    
  for (let i = 0; i<=n2; i++) {
    if (n2 % i == 0) {
      arr2.push(i);
    }
  }  
    
  arr1.filter((value, index, arr) => {
    if(arr2.some(element => element == value)) {
//      if (value > arr1[index-1]) {
//        result = value;
//      }
//      result = Math.max(...arr1);
    }
  });
    
  return result = arr1[arr1.length-1];
//  return result;
}

function removeDuplicationElement() {
  let test1 = document.querySelectorAll('.resultWrapper');
  let test2 = document.querySelector('.resultWrapper');

  if(test1.length > 1) {    
    document.body.removeChild(test2);
  }    
}