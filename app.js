document.addEventListener('DOMContentLoaded', function () {
    // Get references to HTML elements
    const depopsImage = document.getElementById('depops-image');
    const tiktokImage = document.getElementById('tiktok-image');
    const dividerImage = document.getElementById('divider-image');

    let rotationDirection = ''; // Variable to store rotation direction

    // Function to rotate the divider image based on direction
    function rotateDivider(direction) {
        if (direction === 'clockwise') {
            dividerImage.style.transform = 'rotate(180deg)'; // Rotate 180 degrees clockwise
        } else if (direction === 'counterclockwise') {
            dividerImage.style.transform = 'rotate(-180deg)'; // Rotate 180 degrees counterclockwise
        }
    }

    // Function to handle mouseover event on TikTok image
    function handleTikTokHover() {
        rotationDirection = 'counterclockwise'; // Set rotation direction for TikTok
        rotateDivider(rotationDirection); // Rotate divider image
    }

    // Function to handle mouseover event on Depop image
    function handleDepopHover() {
        rotationDirection = 'clockwise'; // Set rotation direction for Depop
        rotateDivider(rotationDirection); // Rotate divider image
    }

    // Function to reset the rotation of the divider image
    function resetDividerRotation() {
        dividerImage.style.transform = ''; // Reset rotation
    }

    // Add event listeners to TikTok and Depop images
    if (depopsImage && tiktokImage) {
        tiktokImage.addEventListener('mouseover', handleTikTokHover);
        tiktokImage.addEventListener('mouseout', resetDividerRotation);
        depopsImage.addEventListener('mouseover', handleDepopHover);
        depopsImage.addEventListener('mouseout', resetDividerRotation);
    }
});
