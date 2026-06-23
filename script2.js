// FILTER BUTTONS
const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );
        button.classList.add("active");
        const filter = button.getAttribute("data-filter");
        cards.forEach(card => {
            if (
                filter === "all" ||
                card.classList.contains(filter)
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});

// SEARCH FUNCTIONALITY
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();
    cards.forEach(card => {
        const title = card.querySelector("h3").textContent.toLowerCase();
        if (
            title.includes(value)
        ) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});

// MODAL POPUP
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");
const viewButtons = document.querySelectorAll(".view-btn");

viewButtons.forEach(button => {
    button.addEventListener("click", () => {
        modal.style.display = "flex";
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// ANIMATED COUNTERS
const counters = document.querySelectorAll(".counter");
counters.forEach(counter => {
    const updateCounter = () => {
        const target = + counter.getAttribute("data-target");
        const current = +counter.innerText;
        const increment =
            target / 100;
        if (current < target) {
            counter.innerText = Math.ceil(current + increment);

            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});

// CONTACT FORM

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {

    e.preventDefault();
    alert("Message Sent Successfully!");
    form.reset();
});