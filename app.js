document.addEventListener("DOMContentLoaded", function() {
    // Get references to HTML elements
    const depopsImage = document.getElementById('depops-image');
    const tiktokImage = document.getElementById('tiktok-image');
    const dividerImage = document.getElementById('divider-image');
    const popupModal = document.getElementById('popup-modal');
    const playButton = document.getElementById('play-button');

    // Function to change the image source to the animated GIF
    function playGif(imageElement) {
        imageElement.src = imageElement.src.replace('.png', ' wiggle.gif');
        dividerImage.style.transform = 'rotate(180deg)'; // Rotate the divider GIF
    }

    // Function to change the image source back to the static image
    function stopGif(imageElement) {
        imageElement.src = imageElement.src.replace(' wiggle.gif', '.png');
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

    // Add event listener to the play button to hide the popup modal and start playing the second playlist
    playButton.addEventListener('click', function() {
        popupModal.style.display = 'none'; // Hide the popup modal
        document.getElementById('playlist2').contentWindow.postMessage('{"method":"play"}', 'https://open.spotify.com');
    });

    // Call showPopup function after a certain delay (e.g., 5 seconds)
    setTimeout(() => {
        popupModal.style.display = 'block'; // Show the popup modal after the delay
    }, 5000);
});
