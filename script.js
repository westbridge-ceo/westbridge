/* =========================================================
   WESTBRIDGE — JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* Smooth navigation */
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");

            if (targetId && targetId !== "#") {
                const target = document.querySelector(targetId);

                if (target) {
                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });


    /* Scroll reveal animation */
    const revealElements = document.querySelectorAll(
        ".about-card, .step, .feature-card, .pricing-card, .founder-container, .cta-content"
    );

    revealElements.forEach(element => {
        element.classList.add("fade-in");
    });

    const observer = new IntersectionObserver(
        (entries, observerInstance) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observerInstance.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(element => {
        observer.observe(element);
    });


    /* Pricing buttons */
    const pricingButtons = document.querySelectorAll(".plan-button");

    pricingButtons.forEach(button => {
        button.addEventListener("click", () => {
            const plan =
                button.dataset.plan ||
                button.textContent.trim();

            alert(
                `Welcome to Westbridge.\n\nYou selected: ${plan}\n\nSubscription checkout will be available when Westbridge launches.`
            );
        });
    });


    /* Get Started buttons */
    const getStartedButtons = document.querySelectorAll(
        ".nav-cta, .hero .btn-primary"
    );

    getStartedButtons.forEach(button => {
        button.addEventListener("click", event => {
            const href = button.getAttribute("href");

            if (!href || href === "#") {
                event.preventDefault();

                const pricing = document.querySelector("#pricing");

                if (pricing) {
                    pricing.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });


    /* Small console confirmation */
    console.log("Westbridge is running successfully.");
});
