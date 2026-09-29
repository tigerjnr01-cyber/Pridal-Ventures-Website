// PRIDAL VENTURES & CONSTRUCTIONS
// Website interactions

document.addEventListener("DOMContentLoaded", function () {

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Add a subtle shadow to the header when scrolling
    const header = document.querySelector(".site-header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 30) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

});￼Enter
