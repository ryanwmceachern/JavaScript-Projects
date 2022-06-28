function My_First_Function() {
    var str = "this text is green";
    var result = str.fontcolor("green");
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("green_text") .innerHTML = result;
}
function My_Second_Function() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("green_text") .innerHTML = sentence;
}