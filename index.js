//gets the modal menu
const modalMenu = document.querySelector(".modal_menu");

//gets arrow
const arrow = document.getElementById("arrow");

//Gets the hamburguer menu
const hamburgerMenu = document.querySelector(".hamburger");
hamburgerMenu.addEventListener("click", () => {
    //toggle modalMenu on click
    modalMenu.classList.toggle("show");
    arrow.classList.toggle("arrow-hide");
});

//if a modal items is clicked, it hides the modal menu
let modalItems = document.querySelectorAll(".modal-item");
for (let i = 0; i < modalItems.length; i++){
    modalItems[i].addEventListener("click", () => {
        modalMenu.classList.toggle("show");
        arrow.classList.toggle("arrow-hide");
    })
}

//animate content on scrolling
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    var appears = document.querySelectorAll(".appear");

  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }

    for (var i = 0; i < appears.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = appears[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
            appears[i].classList.add("active");
        } else {
            appears[i].classList.remove("active");
        }
      }
}
  
window.addEventListener("scroll", reveal);