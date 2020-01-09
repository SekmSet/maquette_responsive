/** -------------------Pour le diaporama ------------------ **/

var slideIndex = 0;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000);
}

showSlides();

/** --------------------------------------------------------- **/
/** ------------------- Pour le 'dropdown' ------------------ **/

var first_dropdown = document.getElementById('first_dropdown');
var second_dropdown = document.getElementById('second_dropdown');

second_dropdown.style.display = "none";
first_dropdown.style.display = "none";

function dropdown_list_first() {

    if (first_dropdown.style.display === "none") {

        first_dropdown.style.display = "block";
        second_dropdown.style.display = "none";

    } else {

        first_dropdown.style.display = "none";
    }
}

function dropdown_list_second() {

    if (second_dropdown.style.display === "none") {

        first_dropdown.style.display = "none";
        second_dropdown.style.display = "block";

    } else {

        second_dropdown.style.display = "none";
    }
}

first_dropdown.addEventListener('click', dropdown_list_first);
second_dropdown.addEventListener('click', dropdown_list_second);

window.addEventListener('click', function (event) {

    if (event.toElement.className !== "button_dropdown") {

        second_dropdown.style.display = "none";
        first_dropdown.style.display = "none";

    }
});

/** --------------------------------------------------------- **/