'use scrict'

function solvePythagoreanTriplet() {
  let n1 = document.querySelector('#n1').value;    
  let n2 = document.querySelector('#n2').value;    
  let n3 = document.querySelector('#n3').value;
  let resultWrapper = document.querySelector('.resultWrapper');
    
  let resultContent = document.createElement('div');
  resultContent.className = 'result-content';
  renderResultContent(n1, n2, n3, resultContent);

  resultWrapper.appendChild(resultContent);  
    
  let test = document.querySelectorAll('.result-content');
  let test2 = document.querySelector('.result-content');
  if (test.length > 1) {
    resultWrapper.removeChild(test2);
  }    
}

function renderResultContent(n1, n2, n3, result) {
  let color1 = 'red';
  let color2 = 'green';
  let examples = '<div>Примеры некоторых пифагоровых троек:</div>(3, 4, 5), (6, 8, 10), (5, 12, 13), (9, 12, 15), (8, 15, 17), (12, 16, 20), (15, 20, 25), (7, 24, 25), (10, 24, 26), (20, 21, 29), (18, 24, 30), (16, 30, 34), (21, 28, 35), (12, 35, 37), (15, 36, 39), (24, 32, 40), (9, 40, 41), (14, 48, 50), (30, 40, 50)';
  let equation = '<span>' + n1 +'</span>' + '<sup><small>2</small></sup>' + ' &nbsp;&nbsp;+&nbsp;' + '<span>' + n2 +'</span>' + '<sup><small>2</small></sup>';

  if (Math.pow(+n1, 2) + Math.pow(+n2, 2) == Math.pow(+n3, 2)) {
    result.innerHTML = '<div class="result-equation">' + equation + '&nbsp;=&nbsp;' + '<span>' + n3 + '</span>' + '<sup><small>2&nbsp;</small></sup>' + '</div>';
    result.innerHTML = result.innerHTML + '<div class="result-text">Числа удовлетворяет уравнению Пифагора</div>';
    result.querySelector('.result-text').style.color = color2;
    result.innerHTML = result.innerHTML + examples;

  } else {
    result.innerHTML = '<div class="result-equation">' + equation + '&nbsp;≠&nbsp; ' + '<span>' + n3 + '</span>' + '<sup><small>2&nbsp;</small></sup>' + '</div>';
    result.innerHTML = result.innerHTML + '<div class="result-text">Числа не удовлетворяют уравнению Пифагора</div>';
    result.querySelector('.result-text').style.color = color1;
    result.innerHTML = result.innerHTML + examples;
  } 
}