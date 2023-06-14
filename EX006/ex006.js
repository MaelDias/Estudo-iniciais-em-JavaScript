function media(){
  var n1 = document.getElementById("nota1").value
  var n2 = document.getElementById("nota2").value
  var res = document.getElementById("result")

  var media = (Number(n1) + Number(n2)) / 2

  var msg = ""
  if (media >= 7.5){
  res.innerHTML = `Parabéns, a média do aluno foi ${media} APROVADO!!`
  } else {
    res.innerHTML = `A média do aluno foi ${media} REPROVADO!!`
  } if (media == 0) { 
    res.innerHTML = `Por favor preencha os campos`
  }
}