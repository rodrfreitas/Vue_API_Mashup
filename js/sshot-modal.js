(() => {

    console.log("screenshot modal / lightbox script running")

    // Variables

    const imgContainers = document.querySelectorAll(".monster-card .open-sshot-modal");
    const lightboxContainer = document.querySelector("#sshotModal");

    // Functions

    function openLightbox(projImagePath) {
        let lightbox = document.querySelector("#sshotModal");
        let lightboxSshot = document.querySelector("#modal-sshot");

        lightboxSshot.src = projImagePath;
        lightbox.style.display = "block";
    }

    function closeLightbox() {
        document.querySelector("#sshotModal").style.display = "none";
    }

    // Event handlers

    // Event handling to open modal / lightbox
    imgContainers.forEach((img) => {
        img.addEventListener("click", function (open) {
            let projImagePath = open.target.dataset.projImagePath;
            openLightbox(projImagePath);
        });
    });

    // Event handling to close modal / lightbox
    lightboxContainer.addEventListener("click", function (event) {
        // Check if the clicked element has a specific ID or other criteria
        if (event.target.id === "closeModalBtn") {
            closeLightbox();
        }
    });

    // Close modal / lightbox if user clicks outside
    window.onclick = function (event) {
        let lightbox = document.querySelector("#sshotModal");
        if (event.target == lightbox) {
            closeLightbox();
        }
    };

})();
