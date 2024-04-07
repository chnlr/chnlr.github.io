document.addEventListener('DOMContentLoaded', function () {
    // Get references to HTML elements
    const depopsImage = document.getElementById('depops-image');
    const tiktokImage = document.getElementById('tiktok-image');
    const dividerImage = document.getElementById('divider-image');
    let isDividerRotated = false; // Flag to track if the divider is rotated

    // Function to change the image source to the animated GIF and rotate divider image
    function playGif(element) {
        if (element.id === 'depops-image') {
            element.src = 'depopwiggle.gif'; // Update the source of the element passed as parameter
        } else if (element.id === 'tiktok-image') {
            element.src = 'tiktokwiggle.gif'; // Update the source of the element passed as parameter
        }
        if (!isDividerRotated) {
            // Rotate the divider only if it's not already rotated
            dividerImage.style.transform = 'rotate(' + (element.id === 'depops-image' ? '-180deg' : '180deg') + ')';
            isDividerRotated = true; // Update the flag
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

    // Function to play explode animation when divider is clicked
    function playExplodeAnimation() {
        console.log('Divider clicked!'); // Check if the click event is triggered
        dividerImage.src = 'divider explode.gif'; // Ensure the correct path to the exploding GIF
        setTimeout(() => {
            console.log('Redirecting to /secret...');
            // After animation, redirect to secret page
            window.location.href = 'http://chahanler.com/secret';
        }, 1000); // Adjust the delay time if needed
    }

    // Add event listener to dividerImage to trigger explode animation on click
    if (dividerImage) {
        console.log('Divider image found!');
        dividerImage.addEventListener('click', playExplodeAnimation);
    } else {
        console.error('Divider image not found!');
    }

    // Add event listeners to TikTok and Depop images
    if (depopsImage && tiktokImage) {
        depopsImage.addEventListener('mouseover', () => playGif(depopsImage));
        depopsImage.addEventListener('mouseout', () => stopGif(depopsImage));
        tiktokImage.addEventListener('mouseover', () => playGif(tiktokImage));
        tiktokImage.addEventListener('mouseout', () => stopGif(tiktokImage));
    }
});
