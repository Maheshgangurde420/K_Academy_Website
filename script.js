// ================= MOBILE MENU =================

function toggleMenu() {

    const navMenu = document.getElementById("navMenu");

    navMenu.classList.toggle("active");

}


// Close mobile menu after clicking link

document.querySelectorAll("#navMenu a").forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .getElementById("navMenu")
            .classList.remove("active");

    });

});


// ================= COURSE DETAILS =================

function showCourse(courseName) {

    alert(
        "📚 " + courseName +
        "\n\n" +
        "✓ Practical Training\n" +
        "✓ Real World Projects\n" +
        "✓ Interview Preparation\n" +
        "✓ Placement Assistance\n\n" +
        "Our counsellor will contact you for complete details."
    );

}


// ================= CONTACT FORM =================

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const course =
        document.getElementById("course").value;


    if (name === "") {

        alert("Please enter your name.");

        return;
    }


    if (phone === "") {

        alert("Please enter your mobile number.");

        return;
    }


    if (!/^[0-9]{10}$/.test(phone)) {

        alert("Please enter a valid 10-digit mobile number.");

        return;
    }


    if (email === "") {

        alert("Please enter your email address.");

        return;
    }


    if (!/^\S+@\S+\.\S+$/.test(email)) {

        alert("Please enter a valid email address.");

        return;
    }


    if (course === "") {

        alert("Please select a course.");

        return;
    }


    alert(
        "🎉 Thank You, " +
        name +
        "!\n\n" +
        "Your enquiry has been submitted successfully.\n\n" +
        "Our career counsellor will contact you soon."
    );


    contactForm.reset();

});


// ================= FAQ =================

function toggleFAQ(button) {

    const item =
        button.parentElement;


    const allItems =
        document.querySelectorAll(".faq-item");


    allItems.forEach(function(faq) {

        if (faq !== item) {

            faq.classList.remove("active");

            faq.querySelector("button span").textContent = "+";

        }

    });


    item.classList.toggle("active");


    const icon =
        button.querySelector("span");


    if (item.classList.contains("active")) {

        icon.textContent = "−";

    } else {

        icon.textContent = "+";

    }

}


// ================= COUNTER ANIMATION =================

const counters =
    document.querySelectorAll(".counter");


let counterStarted = false;


function startCounters() {

    if (counterStarted) return;

    const heroStats =
        document.querySelector(".hero-stats");

    const position =
        heroStats.getBoundingClientRect().top;


    if (position < window.innerHeight) {

        counterStarted = true;


        counters.forEach(function(counter) {

            const target =
                Number(counter.dataset.target);

            let current = 0;

            const increment =
                Math.ceil(target / 60);


            const timer =
                setInterval(function() {

                    current += increment;


                    if (current >= target) {

                        current = target;

                        clearInterval(timer);

                    }


                    counter.textContent =
                        current;

                }, 25);

        });

    }

}


window.addEventListener("scroll", startCounters);

window.addEventListener("load", startCounters);


// ================= TOP BUTTON =================

const topBtn =
    document.getElementById("topBtn");


window.addEventListener("scroll", function() {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});


function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}