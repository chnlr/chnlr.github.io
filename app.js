document.addEventListener('DOMContentLoaded', function () {
    // Get references to HTML elements
    const depopsImage = document.getElementById('depops-image');
    const tiktokImage = document.getElementById('tiktok-image');
    const dividerImage = document.getElementById('divider-image');

    // Function to change the image source to the animated GIF and rotate divider image
    function playGif(element) {
        if (element.id === 'depops-image') {
            depopsImage.src = 'depopwiggle.gif'; // Correct the GIF filename
            dividerImage.style.transform = 'rotate(-180deg)'; // Rotate the divider GIF for Depop
        } else if (element.id === 'tiktok-image') {
            tiktokImage.src = 'tiktokwiggle.gif'; // Correct the GIF filename
            dividerImage.style.transform = 'rotate(180deg)'; // Rotate the divider GIF for TikTok
        }
    }

    // Function to change the image source back to the static image and reset divider rotation
    function stopGif(element) {
        if (element.id === 'depops-image') {
            depopsImage.src = 'depopstill.png'; // Correct the image filename
        } else if (element.id === 'tiktok-image') {
            tiktokImage.src = 'tiktokstill.png'; // Correct the image filename
        }
        dividerImage.style.transform = 'rotate(0deg)'; // Reset rotation for the divider GIF
    }

    // Function to play explode animation when divider is clicked
    function playExplodeAnimation() {
        console.log('Divider clicked!'); // Check if the click event is triggered
        dividerImage.src = 'divider-explode.gif'; // Ensure the correct path to the exploding GIF
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

    // Add event listener to trigger rotation of the divider on hover
    if (dividerImage) {
        dividerImage.addEventListener('mouseover', () => {
            dividerImage.style.transform = 'rotate(180deg)'; // Rotate the divider GIF
        });
        dividerImage.addEventListener('mouseout', () => {
            dividerImage.style.transform = 'rotate(0deg)'; // Reset rotation for the divider GIF
        });
    }

    // Add event listeners to TikTok and Depop images to trigger rotation of the divider
    if (depopsImage && tiktokImage) {
        depopsImage.addEventListener('mouseover', () => playGif(depopsImage));
        depopsImage.addEventListener('mouseout', () => stopGif(depopsImage));
        tiktokImage.addEventListener('mouseover', () => playGif(tiktokImage));
        tiktokImage.addEventListener('mouseout', () => stopGif(tiktokImage));
    }
});
