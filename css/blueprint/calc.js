function Input(inputField) {
    this.inputField = inputField;       
}

function getElement(input) {        
    return document.getElementById(input);
}

//Operand.inheriteFrom(Input);
//Operand.prototype = new Input;
//Operand.prototype.constructor = new Input();
function Operand(inputField) {            
    this.inheritFrom = Input;
    this.inheritFrom(getElement(inputField));
    this.helpField = getElement(inputField + "-helptext");    
}

Operand.prototype.validate = function(input) {    
    if (isNaN(input.value) || input.value == "") {	
        this.helpField.innerHTML = "Enter numbers only";
	return false;
    } else {	
	this.helpField.innerHTML = "";	
	return true;
    }
}

function validateOperand(inputField) {    
    objOperand = new Operand(inputField);
    objOperand.validate(objOperand.inputField);
}    

