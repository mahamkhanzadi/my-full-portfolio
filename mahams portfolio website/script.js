
// =========================
// Mobile Menu
// =========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


// Open and Close Mobile Menu

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuBtn.setAttribute("aria-expanded", isOpen);

        menuBtn.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

    });


    // Close Menu After Clicking a Link

    const links = document.querySelectorAll(".nav-links a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuBtn.setAttribute("aria-expanded", "false");

            menuBtn.setAttribute("aria-label", "Open navigation");

        });

    });


    // Close Menu When Clicking Outside

    document.addEventListener("click", function (event) {

        const clickedInsideMenu = navLinks.contains(event.target);
        const clickedMenuButton = menuBtn.contains(event.target);

        if (!clickedInsideMenu && !clickedMenuButton) {

            navLinks.classList.remove("active");

            menuBtn.setAttribute("aria-expanded", "false");

            menuBtn.setAttribute("aria-label", "Open navigation");

        }

    });


    // Close Menu With Escape Key

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            navLinks.classList.remove("active");

            menuBtn.setAttribute("aria-expanded", "false");

            menuBtn.setAttribute("aria-label", "Open navigation");

            menuBtn.focus();

        }

    });

}


// =========================
// Scroll Reveal Animation
// =========================

const sections = document.querySelectorAll(
    ".about, .skills, .projects, .contact"
);


// Show Sections Without Animation
// When Reduced Motion Is Preferred

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;


if (prefersReducedMotion || !("IntersectionObserver" in window)) {

    sections.forEach(function (section) {

        section.classList.add("show");

    });

} else {

    const observer = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    // Stop observing after animation

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    // Observe All Sections

    sections.forEach(function (section) {

        observer.observe(section);

    });

}
