let display = document.querySelector('.textSection__numbers')
const ac = document.querySelector('.ac')
const de = document.querySelector('.de')
const point = document.querySelector('.point')
const slash = document.querySelector('.slash')
const multiplay = document.querySelector('.multiplay')
const subtraction = document.querySelector('.subtraction')
const addition = document.querySelector('.addition')
const result = document.querySelector('.result')
const numbers = document.querySelectorAll('.number')

let content = ``

let currentInput = ''
let previousInput = ''
let operation = null

// Obsługa kliknięć numerów
numbers.forEach(button => {
	button.addEventListener('click', () => {
		handleNumber(button.innerText)
		updateDisplay()
	})
})

// Dodawanie cyfr do obecnego wejścia
function handleNumber(number) {
	if (currentInput.includes('.') && number === '.') return
	currentInput += number
}

// Aktualizacja wyświetlacza
function updateDisplay() {
	display.innerText = currentInput
}

// Obsługa operatorów
;[addition, subtraction, multiplay, slash].forEach(operatorButton => {
	operatorButton.addEventListener('click', () => {
		handleOperation(operatorButton.innerText)
	})
})

function handleOperation(selectedOperation) {
	if (currentInput === '') return
	if (previousInput !== '') {
		calculate()
	}
	operation = selectedOperation
	previousInput = currentInput
	currentInput = ''
}

// Obliczenia
function calculate() {
	let calculation
	const prev = parseFloat(previousInput)
	const current = parseFloat(currentInput)

	if (isNaN(prev) || isNaN(current)) return

	switch (operation) {
		case '+':
			calculation = prev + current
			break
		case '-':
			calculation = prev - current
			break
		case '*':
			calculation = prev * current
			break
		case '/':
			if (current === 0) {
				alert('Nie można dzielić przez zero!')
				return
			}
			calculation = prev / current
			break
		default:
			return
	}
	currentInput = calculation.toString()
	operation = undefined
	previousInput = ''
}

// Obsługa przycisku równości
result.addEventListener('click', button => {
	calculate()
	updateDisplay()
})

// Obsługa przycisku AC (Clear All)
ac.addEventListener('click', button => {
	currentInput = ''
	previousInput = ''
	operation = null
	updateDisplay()
})

// Obsługa przycisku DE (Delete)
de.addEventListener('click', button => {
	currentInput = currentInput.toString().slice(0, -1)
	updateDisplay()
})
point.addEventListener('click', () => {
	if (currentInput.includes('.') && currentInput !== '') return
	currentInput += '.'
	updateDisplay()
})
