// Get references to HTML elements
const depopsImage = document.getElementById('depops-image');
const tiktokImage = document.getElementById('tiktok-image');
const dividerImage = document.getElementById('divider-image');

// Function to change the image source to the animated GIF and rotate divider image
function playGif(element) {
    if (element === depopsImage) {
        depopsImage.src = 'depops wiggle.gif';
        dividerImage.style.transform = 'rotate(-180deg)'; // Rotate the divider GIF for Depop
    } else if (element === tiktokImage) {
        tiktokImage.src = 'tiktok wiggle.gif';
        dividerImage.style.transform = 'rotate(180deg)'; // Rotate the divider GIF for TikTok
    }
}

// Function to change the image source back to the static image and reset divider rotation
function stopGif(element) {
    if (element === depopsImage) {
        depopsImage.src = 'depops still.png';
    } else if (element === tiktokImage) {
        tiktokImage.src = 'tiktok still.png';
    }
    dividerImage.style.transform = 'rotate(0deg)'; // Reset rotation for the divider GIF
}

// Add event listeners to TikTok and Depop images
depopsImage.addEventListener('mouseover', () => playGif(depopsImage));
depopsImage.addEventListener('mouseout', () => stopGif(depopsImage));
tiktokImage.addEventListener('mouseover', () => playGif(tiktokImage));
tiktokImage.addEventListener('mouseout', () => stopGif(tiktokImage));
