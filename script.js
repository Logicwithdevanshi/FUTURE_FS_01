document.addEventListener("DOMContentLoaded", function () {

    const sections = document.querySelectorAll(".section, .hero");

    window.addEventListener("scroll", function () {
        sections.forEach(section => {
            const position = section.getBoundingClientRect().top;

            if (position < window.innerHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    });

    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";
        section.style.transition = "all 0.8s ease";
    });

    
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been submitted.");
    form.reset();
  });
});
