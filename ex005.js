function soma(){
  var n1 = Number(window.prompt("Por favor digite um número:"))
  var n2 = Number(window.prompt("Por favor digite outro número:"))
  var res = document.getElementById('result')

  res.innerHTML= `A soma entre ${n1} e ${n2} é ${n1 + n2}`
}