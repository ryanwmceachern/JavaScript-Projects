function My_First_Function() {//makes a function
    var str = "this text is green";//displays "this text is green"
    var result = str.fontcolor("green");//changes the font color
    document.getElementById("green_text") .innerHTML = result;//sets the id to call upon the function 
}//closes the function
function My_Second_Function() {//makes a function
    var sentence = "I am learning";//displays the text
    sentence += " a lot from this book!";//to concatenate a string
    document.getElementById("green_text") .innerHTML = sentence;//sets the id to call upon function
}//closes the function