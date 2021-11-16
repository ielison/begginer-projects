const calcular = document.getElementById('calcular')

function imc() {
  const nome = document.getElementById('nome').value
  const altura = document.getElementById('altura').value
  const peso = document.getElementById('peso').value
  const resultado = document.getElementById('resultado')

  if (nome !== '' && altura !== '' && peso !== '') {
    const valorIMC = (peso / (altura * altura)).toFixed(1)
    let classficacao = ''
    if (valorIMC < 18.5) {
      classficacao = 'abaixo do peso'
    } else if (valorIMC < 25) {
      classficacao = 'com o peso normal'
    } else if (valorIMC < 30) {
      classficacao = 'com sobrepeso'
    } else if (valorIMC < 35) {
      classficacao = 'com obesidade grau I'
    } else if (valorIMC < 40) {
      classficacao = 'com obesidade grau II'
    } else {
      classficacao = 'com obesidade mórbida'
    }
    resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classficacao}.`
  } else {
    alert('Preencha os campos vazios!')
  }
}

calcular.addEventListener('click', imc)
