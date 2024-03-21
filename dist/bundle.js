/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("class SimpleCalculator{\r\n//A class for every calculator instance\r\n\r\n    constructor(previousOperandTextElement, currentOperandTextElement){\r\n        this.previousOperandTextElement = previousOperandTextElement\r\n        this.currentOperandTextElement = currentOperandTextElement\r\n        // this.operations = operations\r\n        this.clear()\r\n    }\r\n\r\n    clear(){\r\n        //clears calculator screen\r\n        this.previousOperand = ''\r\n        this.currentOperand = ''\r\n        this.operation = undefined\r\n    }\r\n    delete(){\r\n        //deletes single character\r\n        this.currentOperand = this.currentOperand.toString().slice(0,-1)\r\n    }\r\n   \r\n    putNumber(number){\r\n        if( number === '.' && this.currentOperand.includes('.') ) return \r\n        this.currentOperand = this.currentOperand.toString() + number.toString()\r\n    }\r\n\r\n    chooseOperation(operation){\r\n        if (this.currentOperand === '') return\r\n        if (this.previousOperand !== ''){\r\n                this.compute()\r\n         }\r\n        this.operation = operation\r\n        this.previousOperand  = this.currentOperand\r\n        this.currentOperand = ''\r\n\r\n        }\r\n\r\n    compute(){\r\n        //this method \r\n    let computation\r\n    const prev = parseFloat(this.previousOperand)\r\n    const current = parseFloat(this.currentOperand)\r\n \r\n    if (isNaN(prev) || isNaN(current) ){\r\n        if (this.operation ===  '±'){\r\n            computation = prev * -1\r\n            this.currentOperand = computation\r\n            this.operation= undefined\r\n            this.previousOperand = ''\r\n        }\r\n        return\r\n    } \r\n    switch (this.operation){\r\n        case '+':\r\n            computation = prev + current\r\n            break\r\n        case '-':\r\n            computation = prev - current\r\n            break\r\n        case '÷':\r\n            computation = prev / current\r\n            break\r\n        case 'X':\r\n            // console.log(\"all dya2\")\r\n            computation = prev * current\r\n            break\r\n        case '%':\r\n            computation = prev % current    \r\n            break     \r\n        default:\r\n           return\r\n    }\r\n    this.currentOperand = computation\r\n    this.operation= undefined\r\n    this.previousOperand = ''\r\n}\r\n\r\n\r\n    getDisplayNumber(number) {\r\n        //adds commas and formats decimals for the display screen\r\n        const stringNumber = number.toString()\r\n        const integerDigits = parseFloat(stringNumber.split('.')[0])\r\n        const decimalDigits = stringNumber.split('.')[1]\r\n        let integerDisplay\r\n        if (isNaN(integerDigits)) {\r\n        integerDisplay = ''\r\n        } else {\r\n        integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })\r\n        }\r\n        if (decimalDigits != null) {\r\n        return `${integerDisplay}.${decimalDigits}`\r\n        } else {\r\n        return integerDisplay\r\n        }\r\n    }\r\n\r\n\r\n\r\n    updateDisplay() {\r\n        this.currentOperandTextElement.innerText =\r\n        this.getDisplayNumber(this.currentOperand)\r\n        if (this.operation != null) {\r\n        this.previousOperandTextElement.innerText =\r\n            `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`\r\n        } else {\r\n        this.previousOperandTextElement.innerText = ''\r\n        }\r\n    }\r\n}\r\n\r\n\r\n//select all html elements\r\nconst numberButtons = document.querySelectorAll('[data-number]')\r\nconst operationButtons = document.querySelectorAll('[data-operations]')\r\nconst equalsButton = document.querySelector('[data-equals]')\r\n// const deleteButton = document.querySelector('[data-delete]')\r\nconst allClear = document.querySelector('[data-all-clear]')\r\nconst  previousOperandTextElement = document.querySelector('[data-previous-operand ]')\r\nconst  currentOperandTextElement = document.querySelector('[data-current-operand ]')\r\nconst  toggleButton = document.querySelector('[data-toggle-theme]')// the button for themes\r\n\r\n\r\n\r\n\r\n//creating a calulator instnace\r\n\r\nconst calculator = new SimpleCalculator(previousOperandTextElement, currentOperandTextElement)\r\n\r\n\r\nnumberButtons.forEach(button => {\r\n    button.addEventListener('click',()=>{\r\n        if (button.innerText !== '±'){\r\n               calculator.putNumber(button.innerText)\r\n                calculator.updateDisplay()\r\n        }else if (button.innerText === '±'){\r\n            calculator.reverse(button.innerText)\r\n            calculator.updateDisplay()\r\n        }\r\n \r\n})})\r\n\r\noperationButtons.forEach(button => {\r\n    button.addEventListener('click',()=>{\r\n    calculator.chooseOperation(button.innerText)\r\n    calculator.updateDisplay()\r\n})})\r\n\r\nequalsButton.addEventListener('click',button=>{\r\n    \r\n    calculator.compute()\r\n    calculator.updateDisplay()\r\n})\r\n\r\nallClear.addEventListener('click',button=>{\r\n    calculator.clear()\r\n    calculator.updateDisplay()\r\n})\r\n\r\n// deleteButton.addEventListener('click',button=>{\r\n//     calculator.delete()\r\n//     calculator.updateDisplay()\r\n// })\r\n\r\n//Toggle theme fuunction \r\ntoggleButton.addEventListener('click', ()=>{\r\n    const calculator = document.querySelector(\".calculator-grid\");\r\n    calculator.classList.toggle(\"red-calculator-grid\")\r\n    console.log(\"working\")\r\n})\n\n//# sourceURL=webpack://simple-calculator/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;