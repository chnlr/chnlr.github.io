// Get references to HTML elements
const depopsImage = document.getElementById('depops-image');
const tiktokImage = document.getElementById('tiktok-image');
const dividerImage = document.getElementById('divider-image');

// Function to change the image source to the animated GIF and rotate divider image
function playGif(imageElement) {
    imageElement.src = imageElement.src.replace(' still.png', ' wiggle.gif');
    if (imageElement === depopsImage) {
        dividerImage.style.transform = 'rotate(-180deg)'; // Rotate the divider GIF for Depop
    } else if (imageElement === tiktokImage) {
        dividerImage.style.transform = 'rotate(180deg)'; // Rotate the divider GIF for TikTok
    }
}

// Function to change the image source back to the static image and reset divider rotation
function stopGif(imageElement) {
    imageElement.src = imageElement.src.replace(' wiggle.gif', ' still.png');
    dividerImage.style.transform = 'rotate(0deg)'; // Reset rotation for the divider GIF
}

// Add event listeners to TikTok and Depop images
depopsImage.addEventListener('mouseover', () => playGif(depopsImage));
depopsImage.addEventListener('mouseout', () => stopGif(depopsImage));
tiktokImage.addEventListener('mouseover', () => playGif(tiktokImage));
tiktokImage.addEventListener('mouseout', () => stopGif(tiktokImage));

// Function to play explode animation when divider is clicked
function playExplodeAnimation() {
    dividerImage.src = 'divider explode.gif';
    setTimeout(() => {
        // After animation, redirect to secret page
        window.location.href = 'http://chahanler.com/secret';
    }, 1000); // Adjust the delay time if needed
}

// Add event listener to dividerImage to trigger explode animation on click
dividerImage.addEventListener('click', playExplodeAnimation);
