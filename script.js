let number = 0

document.getElementById('calculate').addEventListener('click', addition)

function addition () {
  number = document.getElementById('input').value
	number = parseInt(number)
  number = number + 1
  document.getElementById('answer').innerHTML = number
}