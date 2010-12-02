function Input(inputField) {
    this.inputField = inputField;       
}

function getElement(input) {        
    return document.getElementById(input);
}

function Operand(inputField) {            
    this.inheritFrom = Input;
    this.inheritFrom(getElement(inputField));
    this.helpText = getElement(inputField + "-helptext");    
}

function Operator(inputField) {            
    this.inheritFrom = Input;
    this.inheritFrom(getElement(inputField));
    this.helpText = getElement(inputField + "-helptext");    
}

var operatorArray = ['+', '-', '/', '*']; 
Operand.prototype.validate = function(input) {    
    if (isNaN(input.value) || input.value == "") {	
        this.helpText.innerHTML = "Enter numbers only";
	return false;
    } else {	
	this.helpText.innerHTML = "";	
	return true;
    }
}

Operator.prototype.validate = function(input) {    
    if (operatorArray.indexOf(input.value) == -1) {
	this.helpText.innerHTML = "Enter operator only";
	return false;
    } else {	
	this.helpText.innerHTML = "";	
	return true;
    }
}
function validateOperand(inputField) {    
    objOperand = new Operand(inputField);      
    objOperand.validate(objOperand.inputField);    
}    

function validateOperator(inputField) {        
    objOperator = new Operator(inputField);
    objOperator.validate(objOperator.inputField);
}

function evaluate() { 
}

