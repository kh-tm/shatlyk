var slideElement = document.getElementsByClassName('slide-element');
var currentSlide = 1;
var tid = setInterval(function() {
  if (currentSlide === 1) {
    slideElement[0].style.left = "-100wh";
    slideElement[1].style.left = "0";
    slideElement[2].style.left = "100wh";

    slideElement[2].style.zIndex = "-1";
    slideElement[0].style.zIndex = "1";
    currentSlide = 2;
  }
  else if (currentSlide === 2) {
    slideElement[0].style.left = "100wh";
    slideElement[1].style.left = "-100wh";
    slideElement[2].style.left = "0";

    slideElement[0].style.zIndex = "-1";
    slideElement[1].style.zIndex = "1";
    currentSlide = 3;
  }
  else if (currentSlide === 3) {
    slideElement[0].style.left = "0";
    slideElement[1].style.left = "100wh";
    slideElement[2].style.left = "-100wh";

    slideElement[1].style.zIndex = "-1";
    slideElement[2].style.zIndex = "1";
    currentSlide = 1;
  }
}
, 2000);
