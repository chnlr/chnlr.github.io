document.addEventListener('DOMContentLoaded', function() {
    // Handle Depop image click to open new tab and play GIF
    var depopImage = document.getElementById('depopImage');
    if (depopImage) {
        depopImage.addEventListener('click', function() {
            depopImage.src = 'clickdepop.gif'; // Change the image to the GIF
            setTimeout(function() {
                window.open('https://www.depop.com/chanlr/', '_blank'); // Open the link in a new tab after 1.4 seconds
            }, 1400);
        });
    }

    // Menu bar slide down effect
    var topMenu = document.querySelector('.top-menu');
    if (topMenu) {
        topMenu.style.top = '-60px'; // Initially hide the menu bar
        setTimeout(function() {
            topMenu.style.top = '0'; // Slide down the menu bar
        }, 100);
    }

    // Modal functionality
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImage");
    var closeModalButton = document.querySelector('.close');

    // Add click events to all images in the asset gallery for modal display
    document.querySelectorAll('.asset-gallery img').forEach(function(img) {
        img.addEventListener('click', function() {
            openModal(img);
        });
    });

    // Close modal either by clicking the close button, the modal background, or pressing Escape
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

    function openModal(img) {
        modal.style.display = "flex"; // Change to flex to center the image
        modalImg.src = img.src;
    }

    function closeModal() {
        modal.style.display = "none";
    }

    // Handle navigation to /assets when clicking the "Streaming Assets" box
    const streamingBox = document.querySelector('.streaming');
    if (streamingBox) {
        streamingBox.addEventListener('click', function() {
            window.location.href = '/assets'; // Redirect to the assets page
        });
    }
});
