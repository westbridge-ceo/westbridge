/* =========================
   WESTBRIDGE JAVASCRIPT
========================= */


/* Current year */

document.getElementById("year").textContent =
    new Date().getFullYear();



/* =========================
   SCROLL TO QUIZ
========================= */

function scrollToQuiz() {

    const quizSection = document.getElementById("quiz");

    if (quizSection) {
        quizSection.scrollIntoView({
            behavior: "smooth"
        });
    }

}



/* =========================
   QUIZ GENERATOR
========================= */

function generateQuiz() {

    const topicInput =
        document.getElementById("topic");

    const difficulty =
        document.getElementById("difficulty");

    const result =
        document.getElementById("quiz-result");


    const topic =
        topicInput.value.trim();

    const level =
        difficulty.value;


    if (topic === "") {

        result.innerHTML = `
            <p>
                Please enter a subject first.
            </p>
        `;

        topicInput.focus();

        return;
    }


    result.innerHTML = `
        <h3>Westbridge is preparing your quiz...</h3>
        <p>
            Creating questions about
            <strong>${escapeHTML(topic)}</strong>
            at <strong>${level}</strong> level.
        </p>
    `;


    setTimeout(function () {

        const questions =
            createQuestions(topic, level);


        let html = `
            <h3>
                Your ${escapeHTML(topic)} Quiz
            </h3>

            <p>
                Difficulty:
                <strong>${escapeHTML(level)}</strong>
            </p>

            <ol>
        `;


        questions.forEach(function(question) {

            html += `
                <li>
                    ${escapeHTML(question)}
                </li>
            `;

        });


        html += `
            </ol>

            <p style="margin-top:18px;">
                <strong>
                    Keep exploring. Keep questioning.
                </strong>
            </p>
        `;


        result.innerHTML = html;

    }, 700);

}



/* =========================
   SAMPLE QUESTION CREATOR
========================= */

function createQuestions(topic, level) {

    if (level === "Easy") {

        return [
            `What is one important thing to know about ${topic}?`,
            `Why is ${topic} important to learn?`,
            `What are some basic ideas connected to ${topic}?`
        ];

    }


    if (level === "Hard") {

        return [
            `How could you explain a complex idea within ${topic} to someone else?`,
            `What are the major challenges or debates surrounding ${topic}?`,
            `How could your understanding of ${topic} be applied to a real-world situation?`
        ];

    }


    return [
        `What are the key concepts you should understand about ${topic}?`,
        `How are the main ideas within ${topic} connected?`,
        `How could knowledge of ${topic} be useful outside the classroom?`
    ];

}



/* =========================
   SECURITY / TEXT SAFETY
========================= */

function escapeHTML(text) {

    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}



/* =========================
   PRICING BUTTONS
========================= */

function choosePlan(plan) {

    alert(
        "You selected the Westbridge " +
        plan +
        " plan."
    );

}



/* =========================
   NAVIGATION HIGHLIGHT
========================= */

const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function(section) {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection =
                section.getAttribute("id");
        }

    });


    navigationLinks.forEach(function(link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});
