document.addEventListener('DOMContentLoaded', function () {
    // Get references to HTML elements
    const depopsImage = document.getElementById('depops-image');
    const tiktokImage = document.getElementById('tiktok-image');
    const dividerImage = document.getElementById('divider-image');

    // Function to change the image source to the animated GIF
    function playGif(element, gifName) {
        element.src = gifName; // Update the source of the element passed as parameter
    }

    // Function to change the image source back to the static image
    function stopGif(element, staticImage) {
        element.src = staticImage; // Update the source of the element passed as parameter
    }

    // Function to rotate the divider image
    function rotateDivider(degrees) {
        dividerImage.style.transform = `rotate(${degrees}deg)`;
    }

    // Function to handle mouseover event on TikTok image
    function handleTikTokMouseOver() {
        playGif(tiktokImage, 'tiktokwiggle.gif');
        rotateDivider(-180); // Rotate counter-clockwise by 180 degrees
    }

    // Function to handle mouseout event on TikTok image
    function handleTikTokMouseOut() {
        stopGif(tiktokImage, 'tiktokstill.png');
        rotateDivider(0); // Rotate back to original position
    }

    // Function to handle mouseover event on Depop image
    function handleDepopMouseOver() {
        playGif(depopsImage, 'depopwiggle.gif');
        rotateDivider(180); // Rotate clockwise by 180 degrees
    }

    // Function to handle mouseout event on Depop image
    function handleDepopMouseOut() {
        stopGif(depopsImage, 'depopstill.png');
        rotateDivider(0); // Rotate back to original position
    }

    // Add event listeners to TikTok and Depop images
    if (depopsImage && tiktokImage) {
        depopsImage.addEventListener('mouseover', handleDepopMouseOver);
        depopsImage.addEventListener('mouseout', handleDepopMouseOut);
        tiktokImage.addEventListener('mouseover', handleTikTokMouseOver);
        tiktokImage.addEventListener('mouseout', handleTikTokMouseOut);
    }

    // Function to handle click event on divider image
    function redirectToSecret() {
        window.location.href = 'https://chahanler.com/secret';
    }

    // Add event listener to divider image
    if (dividerImage) {
        dividerImage.addEventListener('click', redirectToSecret);
        dividerImage.style.cursor = 'pointer'; // Set cursor to pointer
    }
});
