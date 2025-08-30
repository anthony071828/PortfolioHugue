document.querySelectorAll("a.nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

const contactForm = document.getElementById("contactForm");
const contactMessage = document.getElementById("contactMessage");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  fetch(contactForm.action, {
    method: "POST",
    body: new FormData(contactForm),
    headers: { Accept: "application/json" },
  }).then((response) => {
    if (response.ok) {
      contactMessage.style.display = "block";
      contactMessage.textContent = "Message sent! Thank you.";
      contactMessage.classList.remove("text-danger");
      contactMessage.classList.add("text-success");
      contactForm.reset();
    } else {
      contactMessage.style.display = "block";
      contactMessage.textContent = "Oops! Something went wrong.";
      contactMessage.classList.remove("text-success");
      contactMessage.classList.add("text-danger");
    }
  });
});
