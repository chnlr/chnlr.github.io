// Get references to HTML elements
const depopsImage = document.getElementById('depops-image');
const tiktokImage = document.getElementById('tiktok-image');
const dividerImage = document.getElementById('divider-image');
const helloSection = document.getElementById('hello-message');

// Function to change the image source to the animated GIF
function playGif(element) {
    if (element === 'depops') {
        depopsImage.src = 'depops wiggle.gif';
        dividerImage.style.transform = 'rotate(-180deg)'; // Rotate the divider GIF in reverse
    } else if (element === 'tiktok') {
        tiktokImage.src = 'tiktok wiggle.gif';
        dividerImage.style.transform = 'rotate(180deg)'; // Rotate the divider GIF once
    }
}

// Function to change the image source back to the static image
function stopGif(element) {
    if (element === 'depops') {
        depopsImage.src = 'depops still.png';
    } else if (element === 'tiktok') {
        tiktokImage.src = 'tiktok still.png';
    }

    // Reset rotation for the divider GIF
    dividerImage.style.transform = 'rotate(0deg)';
}

// Function to play explode animation when divider is clicked
function playExplodeAnimation() {
    dividerImage.src = 'divider explode.gif';
    setTimeout(() => {
        // After animation, redirect to secret page
        window.location.href = 'http://chahanler.com/secret';
    }, 1000); // Adjust the delay time if needed
}



// Add event listeners to TikTok and Depop images
depopsImage.addEventListener('mouseover', () => playGif('depops'));
depopsImage.addEventListener('mouseout', () => stopGif('depops'));
tiktokImage.addEventListener('mouseover', () => playGif('tiktok'));
tiktokImage.addEventListener('mouseout', () => stopGif('tiktok'));

// Add event listener to dividerImage to trigger explode animation on click
dividerImage.addEventListener('click', () => playExplodeAnimation());

document.addEventListener("DOMContentLoaded", function() {
    var scrolled = false;

    // Add event listener for scroll event
    window.addEventListener('scroll', function() {
        scrolled = true;
    });

    // Show the popup modal when the user scrolls
    function showPopup() {
        if (!scrolled) return;
        document.getElementById('popup-modal').style.display = 'block';
    }

    // Add event listener to the play button
    document.getElementById('play-button').addEventListener('click', function() {
        // Hide the popup modal
        document.getElementById('popup-modal').style.display = 'none';

        // Start playing the second playlist
        document.getElementById('playlist2').contentWindow.postMessage('{"method":"play"}', 'https://open.spotify.com');
    });

    // Call showPopup function after a certain delay (e.g., 5 seconds)
    setTimeout(showPopup, 5000);
});
