document.addEventListener('DOMContentLoaded', function () {
    // Get references to HTML elements
    const depopsImage = document.getElementById('depops-image');
    const tiktokImage = document.getElementById('tiktok-image');
    // No need to get reference to divider image since we're not rotating it anymore

    // Function to change the image source to the animated GIF
    function playGif(element) {
        if (element.id === 'depops-image') {
            element.src = 'depopwiggle.gif'; // Update the source of the element passed as parameter
        } else if (element.id === 'tiktok-image') {
            element.src = 'tiktokwiggle.gif'; // Update the source of the element passed as parameter
        }
    }

    // Function to change the image source back to the static image
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
