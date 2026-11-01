

document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("person-modal");
    const closeBtn = document.querySelector(".close-btn");

    const modalName = document.getElementById("modal-name");
    const modalRole = document.getElementById("modal-role");
    const modalHistory = document.getElementById("modal-history");

    const persons = document.querySelectorAll(".person");

    persons.forEach(function(person) {
        person.addEventListener("click", function() {

            modalName.textContent =
                person.querySelector("h4").textContent;

            modalRole.textContent =
                person.querySelector("p").textContent;

            modalHistory.textContent =
                person.getAttribute("data-history")
                || "Мэдээлэл оруулаагүй байна.";

            modal.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            modal.style.display = "none";
        }
    });

});
