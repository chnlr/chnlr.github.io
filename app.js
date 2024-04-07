document.addEventListener('DOMContentLoaded', function () {
    // Get references to HTML elements
    const depopsImage = document.getElementById('depops-image');
    const tiktokImage = document.getElementById('tiktok-image');
    const dividerImage = document.getElementById('divider-image');
    let dividerRotated = false; // Variable to track if divider has been rotated

    // Function to change the image source to the animated GIF and rotate divider image
    function playGif(element) {
        if (element.id === 'depops-image') {
            element.src = 'depopwiggle.gif'; // Update the source of the element passed as parameter
        } else if (element.id === 'tiktok-image') {
            element.src = 'tiktokwiggle.gif'; // Update the source of the element passed as parameter
        }

        // Rotate the divider GIF only if it hasn't been rotated yet
        if (!dividerRotated) {
            dividerImage.style.transform = 'rotate(180deg)'; // Rotate the divider GIF
            dividerRotated = true; // Set the flag to indicate divider has been rotated
        }
    }

    // Function to change the image source back to the static image and reset divider rotation
    function stopGif(element) {
        if (element.id === 'depops-image') {
            element.src = 'depopstill.png'; // Update the source of the element passed as parameter
        } else if (element.id === 'tiktok-image') {
            element.src = 'tiktokstill.png'; // Update the source of the element passed as parameter
        }
    }

    // Add event listeners to TikTok and Depop images
    if (depopsImage && tiktokImage) {
        depopsImage.addEventListener('mouseover', () => playGif(depopsImage));
        depopsImage.addEventListener('mouseout', () => stopGif(depopsImage));
        tiktokImage.addEventListener('mouseover', () => playGif(tiktokImage));
        tiktokImage.addEventListener('mouseout', () => stopGif(tiktokImage));
    }
});
