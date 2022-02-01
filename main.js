let movieArray = [];
let selectedType = "";

// define a constructor to create note objects
let MovieObject = function (title, year, genre) {
    this.title = title;
    this.year = year;
    this.genre = genre;
}



document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("buttonAdd").addEventListener("click", function () {

        movieArray.push(new MovieObject(document.getElementById("title").value, document.getElementById("year").value, selectedType));
        console.log(movieArray);
        document.getElementById("title").value = "";
        document.getElementById("year").value = "";
    });

    $(document).bind("change", "#select-type", function (event, ui) {
        selectedType = document.getElementById("select-type").value;
    });

    // page before show code *************************************************************************
    $(document).on("pagebeforeshow", "#list", function (event) {   
        createList();
    });
    

});



function createList() {
    
    // clear prior data


    var myul = document.getElementById("myList");
    myul.innerHTML = '';

    movieArray.forEach(function (element,) {   // use handy array forEach method
        var li = document.createElement('li');
        li.innerHTML = element.title + ":  " + element.year + ", " + element.genre;
        myul.appendChild(li);
    });
};

