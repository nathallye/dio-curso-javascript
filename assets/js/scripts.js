var currentNumberWrapper= document.getElementById('currentNumber'); // Pois queremos mudar o html do currentNumber para isso usamos um "embrulho."
var currentNumber = 0; // currentNumber = elemento inteiro inicializado como 0.

function increment() {
  currentNumber = currentNumber + 1; // Modificando a variável currentNumber incrementando + 1.
  currentNumberWrapper.innerHTML = currentNumber; // .innerHTML pega o html que está dentro dele muda para o número obtido a partir do calculo acima (currentNumber = currentNumber + 1).
}

function decrement() {
  currentNumber = currentNumber - 1; // Modificando a variável currentNumber remover - 1.
  currentNumberWrapper.innerHTML = currentNumber; // .innerHTML pega o html que está dentro dele muda para o número obtido a partir do calculo acima (currentNumber = currentNumber - 1).
}