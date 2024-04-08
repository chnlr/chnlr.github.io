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

    // Function to handle mouseover event on TikTok image
    function triggerDividerAnimation() {
        playGif(dividerImage, 'divider move.gif'); // Play the animation
        // Remove the event listener after the animation is triggered
        tiktokImage.removeEventListener('mouseover', triggerDividerAnimation);
    }

    // Add event listeners to TikTok and Depop images
    if (depopsImage && tiktokImage) {
        depopsImage.addEventListener('mouseover', () => playGif(depopsImage, 'depopwiggle.gif'));
        depopsImage.addEventListener('mouseout', () => stopGif(depopsImage, 'depopstill.png'));
        // Add event listener to trigger divider animation when cursor goes over TikTok image
        tiktokImage.addEventListener('mouseover', triggerDividerAnimation);
        tiktokImage.addEventListener('mouseout', () => stopGif(tiktokImage, 'tiktokstill.png'));
    }

    // Function to handle click event on divider image
    function redirectToSecret() {
        // Get reference to the divider image
        const dividerImage = document.getElementById('divider-image');
        
        // Update the source of the divider image to the exploding GIF
        dividerImage.src = 'divider explode.gif';

        // Redirect to the secret page after a short delay (adjust the delay as needed)
        setTimeout(function() {
            window.location.href = 'https://chahanler.com/secret';
        }, 1000); // 1000 milliseconds = 1 second
    }

    // Add event listener to divider image
    if (dividerImage) {
        dividerImage.addEventListener('click', redirectToSecret);
    }
});
