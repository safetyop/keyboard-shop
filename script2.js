var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("banner-image");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
let lastScrollTop = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll Down
        header.style.top = "-60px"; // ซ่อน header เมื่อเลื่อนลง
    } else {
        // Scroll Up
        header.style.top = "0"; // แสดง header เมื่อเลื่อนขึ้น
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
