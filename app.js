document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('.asset-gallery img');
    images.forEach(function(img) {
        img.addEventListener('click', function() {
            openModal(img);
        });
    });

    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImage");
    // Remove the caption variable if not needed
    var closeModalButton = document.querySelector('.close');

    function openModal(img) {
        modal.style.display = "flex"; // Change to flex to center the image
        modalImg.src = img.src;
        // Remove or comment out the next line if you don't want to show the caption
        // captionText.innerHTML = img.alt; 
    }

    closeModalButton.addEventListener('click', closeModal);
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            closeModal();
        }
    });

    function closeModal() {
        modal.style.display = "none";
    }
});
