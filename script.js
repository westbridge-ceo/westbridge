/* ==================================================
   WESTBRIDGE — JAVASCRIPT
================================================== */


/* ==================================================
   SMOOTH SCROLLING
================================================== */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* ==================================================
   PRICING BUTTONS
================================================== */

const pricingButtons = document.querySelectorAll(".pricing-button");

pricingButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const plan = this.getAttribute("data-plan");

        alert(
            "You selected the " +
            plan +
            " plan.\n\nWestbridge membership checkout will be connected here."
        );

    });

});


/* ==================================================
   SCROLL REVEAL
================================================== */

const revealElements = document.querySelectorAll(
    ".card, .step, .founder-container, .pricing-card"
);

const revealObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform = "translateY(25px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    revealObserver.observe(element);

});


/* ==================================================
   NAVBAR SHADOW
================================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 20) {

        navbar.style.boxShadow =
            "0 8px 30px rgba(36, 56, 45, 0.08)";

    } else {

        navbar.style.boxShadow = "none";

    }

});