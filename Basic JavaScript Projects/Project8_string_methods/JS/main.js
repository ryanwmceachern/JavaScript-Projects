function full_Sentence() {//displays full sentence
    var part_1 = " I have ";
    var part_2 = " made this ";
    var part_3 = " into a complete ";
    var part_4 = " sentence. ";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("concatenate").innerHTML = whole_sentence;
}

function slice_Method() {//pullls section you want to be dispalyed
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var section = Sentence.slice(27,33);
    document.getElementById("slice").innerHTML = section;
}
function to_upper_case() {//converts text to uppercase
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var section = Sentence.toUpperCase();
    document.getElementById("upper").innerHTML = section;
}

function to_search() {//method returns the index (position) of the first match.
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var section = Sentence.search(/All/i);
    document.getElementById("search").innerHTML = section;
}

function string_method() {// method that returns a number as a string.
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML= X.toString() ;
}

function precision_method() {//formats a number to a specified length
    var X = 12938.3012987386112;
    document.getElementById("precision").innerHTML= X.toPrecision(10) ;
}

function to_fixed_method() {//method rounds the string to a specified number of decimals.
    var X = 15.499;
    document.getElementById("fixed").innerHTML= X.toFixed(10) ;
}

function value_of_method() {//method returns the primitive value of a string.
    var X = 15.499;
    document.getElementById("value").innerHTML= X.valueOf() ;
}