document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".service-card");

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      card.classList.toggle("active");
    });
  });
});
 document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("status");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // 🚫 stops page reload

    const formData = new FormData(form);

    fetch("https://sheetdb.io/api/v1/klxwoljtxs5p7", {
      method: "POST",
      body: formData
    })
    .then(() => {
      status.textContent = "Form submitted successfully!";
      form.reset();
    })
    .catch(() => {
      status.textContent = "Something went wrong. Try again.";
    });
  });
});
