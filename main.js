let display = document.querySelector('.textSection__numbers')
const ac = document.querySelector('.ac')
const de = document.querySelector('.de')
const point = document.querySelector('.point')
const slash = document.querySelector('.slash')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')
const multiplay = document.querySelector('.multiplay')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const subtraction = document.querySelector('.subtraction')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const addition = document.querySelector('.addition')
const doubleZero = document.querySelector('.doubleZero')
const zero = document.querySelector('.zero')
const result = document.querySelector('.result')

let content = ``

seven.addEventListener('click', () => {
	content = content + seven.textContent
	display.textContent = content
})
