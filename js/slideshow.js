let slideIndex = 1;
let counter = 0;
showSlides(slideIndex);
timedCount();

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  counter = 0;
}

// counter function
function timedCount() {
  if (counter == 5) { // checks if counter hits 5s
    // go to next slide and reset counter
    showSlides(slideIndex++);
    counter = 0;
  } else {
    counter++;
  }
  // runs timeCount every 1s
  setTimeout(timedCount, 1000);
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
} 