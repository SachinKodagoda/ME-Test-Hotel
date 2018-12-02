var navButton = document.getElementById("nav_toggle");
var left_menu = document.getElementById("left_menu");
var ham = document.getElementsByClassName("ham");

function toggle_nav(event) {
    var i;
    for (i = 0; i < ham.length; i++) {
        ham[i].classList.toggle("cross");
    }
    // left_menu.classList.toggle("came_in");
}

// navButton.addEventListener("click", toggle_nav);

// left_menu.addEventListener("click", toggle_nav);
