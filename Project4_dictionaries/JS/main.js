function my_Dictionary() {//setting the function for my dictionary
    var Animal = {//variables for my dictionary
        Species:"Dog",
        Color:"Black",
        Breed:"labrador",
        Age:5,
        Sound:"Bark!"
    };//closing the dictionary
    delete Animal.Sound;//operator to delete
    document.getElementById("Dictionary").innerHTML = Animal.Sound; Animal.Age;// id to call upon the program
}//closes the function