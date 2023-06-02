function inicio(){
  var nome = window.prompt('Olá, qual é o seu nome?')
  var res = document.getElementById('res')
  res.innerHTML = `Olá ${nome}, é um prazer te conhecer \u{1F596}. O seu nome tem ${nome.length} letras`

}