function addition_function() {//creates function
    var addition = 2+2;//sets variables for addition
    document.getElementById("math").innerHTML = "2 + 2 = " + addition;//solves equation
}

function subtraction_function() {//creates function
    var subtraction = 5-2;//sets variables for subtraction
    document.getElementById("math").innerHTML = "5 - 2 = " + subtraction;//solves equation
}

function multiplication() {//creates function
    var simple_math = 6 * 8;//sets multiplication variables
    document.getElementById("math").innerHTML = "6 * 8 = " + simple_math;//sp;ves equation
}

function division() { //creates function
    var simple_math = 48 / 6;//sets division variables 
    document.getElementById("math").innerHTML = "48 / 6 = " + simple_math;//solves equation
}

function more_math() {//creates function 
    var simple_math = (1 + 2) *10 / 2-5;//sets multiple variables for equation 
    document.getElementById("math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_math;//displays solved answer
}

function modulus_operator() {//sets the function to be called upon 
    var simple_math = 25 % 6;//sets the equation to be solved
    document.getElementById("math").innerHTML = "when you divide 25 by 6 you have a remainder of: " + simple_math; //sets id for the program 
}

function negation_operator() {//sets the function to be called upon 
    var x = 10;//sets the equation to be solved
    document.getElementById("math").innerHTML = -x; //sets id for the program 
}

var x=5;//sets variable for increment
x++;//to get increment x must have + value
document.write(x);//shows solved increment
document.write("<br>");//adds line spacing
document.write("<br>")


var x = 5.25;//sets variable for decrement
x--;//to get a decrement x must have - value
document.write(x);//shows solved decrement
document.write("<br>");//adds line spacing 

window.alert(Math.random());//gets random number between 0&1

window.alert(Math.random() * 100);//gets random number between 0&100


//define Math object unlike other objects the math object has no contrustor. the math object is static 
//all methods and properties can be used without creating a math object first.

window.alert(Math.round(4.6));// rounds number// this is my exapmle of a math method