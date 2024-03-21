class SimpleCalculator{
//A class for every calculator instance

    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        // this.operations = operations
        this.clear()
    }

    clear(){
        //clears calculator screen
        this.previousOperand = ''
        this.currentOperand = ''
        this.operation = undefined
    }
    delete(){
        //deletes single character
        this.currentOperand = this.currentOperand.toString().slice(0,-1)
    }
   
    putNumber(number){
        if( number === '.' && this.currentOperand.includes('.') ) return 
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation){
        if (this.currentOperand === '') return
        if (this.previousOperand !== ''){
                this.compute()
         }
        this.operation = operation
        this.previousOperand  = this.currentOperand
        this.currentOperand = ''

        }

    compute(){
        //this method 
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
 
    if (isNaN(prev) || isNaN(current) ){
        if (this.operation ===  '±'){
            computation = prev * -1
            this.currentOperand = computation
            this.operation= undefined
            this.previousOperand = ''
        }
        return
    } 
    switch (this.operation){
        case '+':
            computation = prev + current
            break
        case '-':
            computation = prev - current
            break
        case '÷':
            computation = prev / current
            break
        case 'X':
            // console.log("all dya2")
            computation = prev * current
            break
        case '%':
            computation = prev % current    
            break     
        default:
           return
    }
    this.currentOperand = computation
    this.operation= undefined
    this.previousOperand = ''
}


    getDisplayNumber(number) {
        //adds commas and formats decimals for the display screen
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
        integerDisplay = ''
        } else {
        integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
        } else {
        return integerDisplay
        }
    }



    updateDisplay() {
        this.currentOperandTextElement.innerText =
        this.getDisplayNumber(this.currentOperand)
        if (this.operation != null) {
        this.previousOperandTextElement.innerText =
            `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
        this.previousOperandTextElement.innerText = ''
        }
    }
}


//select all html elements
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operations]')
const equalsButton = document.querySelector('[data-equals]')
// const deleteButton = document.querySelector('[data-delete]')
const allClear = document.querySelector('[data-all-clear]')
const  previousOperandTextElement = document.querySelector('[data-previous-operand ]')
const  currentOperandTextElement = document.querySelector('[data-current-operand ]')
const  toggleButton = document.querySelector('[data-toggle-theme]')// the button for themes




//creating a calulator instnace

const calculator = new SimpleCalculator(previousOperandTextElement, currentOperandTextElement)


numberButtons.forEach(button => {
    button.addEventListener('click',()=>{
        if (button.innerText !== '±'){
               calculator.putNumber(button.innerText)
                calculator.updateDisplay()
        }else if (button.innerText === '±'){
            calculator.reverse(button.innerText)
            calculator.updateDisplay()
        }
 
})})

operationButtons.forEach(button => {
    button.addEventListener('click',()=>{
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
})})

equalsButton.addEventListener('click',button=>{
    
    calculator.compute()
    calculator.updateDisplay()
})

allClear.addEventListener('click',button=>{
    calculator.clear()
    calculator.updateDisplay()
})

// deleteButton.addEventListener('click',button=>{
//     calculator.delete()
//     calculator.updateDisplay()
// })

//Toggle theme fuunction 
toggleButton.addEventListener('click', ()=>{
    const calculator = document.querySelector(".calculator-grid");
    calculator.classList.toggle("red-calculator-grid")
    console.log("working")
})