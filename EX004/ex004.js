
function calcular(){
  var n1 = Number(window.prompt('Por favor digite um número: '))
  var res = document.getElementById('result')
  res.innerHTML = `O dobro de ${n1} é ${n1*2} e a metade é ${n1/2}`
  
}
