// This sets the deafault values, it also makes them variables.
let number = 0
let number2 = 0
let ansewr = 0
// This makes the button display the answer.
document.getElementById('button').addEventListener('click', multiplication)

function multiplication () {
  // This takes what was writen into the text boxes and sets the values of the variables.
  number2 = document.getElementById('input2').value
  number = document.getElementById('input').value
  // This makes the code recognize what was typed in as numbers rather than a sentence.
  number2 = parseInt(number2)
  number = parseInt(number)
  // This then multiplies the first variable with the second.
  answer = number * number2
  // after this displays the sum.
  document.getElementById('answer').innerHTML = answer
}
