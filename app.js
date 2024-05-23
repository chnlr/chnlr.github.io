document.addEventListener('DOMContentLoaded', function() {
    var depopImage = document.getElementById('depopImage');
    depopImage.addEventListener('click', function() {
        depopImage.src = 'clickdepop.gif'; // Change the image to the GIF
        setTimeout(function() {
            window.open('https://www.depop.com/chanlr/', '_blank'); // Open the link in a new tab after 1.4 seconds
        }, 1400);
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

    document.addEventListener('DOMContentLoaded', function() {
        const streamingBox = document.querySelector('.streaming'); // Select the streaming assets box
        streamingBox.addEventListener('click', function() {
            window.location.href = '/assets'; // Redirect to the assets page
        });
    });
});
