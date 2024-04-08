document.addEventListener('DOMContentLoaded', function () {
    // Get references to HTML elements
    const depopsImage = document.getElementById('depops-image');
    const tiktokImage = document.getElementById('tiktok-image');
    const dividerImage = document.getElementById('divider-image');

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

    // Function to handle click event on divider image
    function redirectToSecret() {
        window.location.href = 'https://chahanler.com/secret';
    }

    // Add event listeners to TikTok and Depop images
    if (depopsImage && tiktokImage) {
        depopsImage.addEventListener('mouseover', () => playGif(depopsImage));
        depopsImage.addEventListener('mouseout', () => stopGif(depopsImage));
        tiktokImage.addEventListener('mouseover', () => playGif(tiktokImage));
        tiktokImage.addEventListener('mouseout', () => stopGif(tiktokImage));
    }

    // Add event listener to divider image
    if (dividerImage) {
        dividerImage.addEventListener('click', redirectToSecret);
    }
});
