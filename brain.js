const paragraphs = document.querySelectorAll(".section__paragraph");

document.addEventListener("scroll", function () {
  paragraphs.forEach((paragraph) => {
    if (isInView(paragraph)) {
      paragraph.classList.add("section__paragraph--visible");
    } else {
      paragraph.classList.remove("section__paragraph--visible"); // reset
    }
  });
});


function isInView(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.bottom > 0 &&
    rect.top <
      (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
  );
}


let lastScroll = 0;
const navbar = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScroll) {

    navbar.style.transition = "top 0.3s ease, opacity 0.3s ease";
    navbar.style.top = "-100px"; 
    navbar.style.opacity = "0";
  } else {
   
    navbar.style.top = "0";
    navbar.style.opacity = "1";
  }

  lastScroll = currentScroll <= 0 ? 0 : currentScroll; 
});
