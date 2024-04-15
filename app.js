document.addEventListener('DOMContentLoaded', function () {
    // Get references to HTML elements
    const depopsImage = document.getElementById('depops-image');
    const tiktokImage = document.getElementById('tiktok-image');
    const dividerImage = document.getElementById('divider-image');
    const cloudsContainer = document.getElementById('clouds-container');

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

    // Function to handle click event on divider image
    function redirectToSecret() {
        // Update the source of the divider image to the exploding GIF
        dividerImage.src = 'divider explode.gif';
        // Redirect to the secret page after a short delay (adjust the delay as needed)
        setTimeout(function() {
            window.location.href = 'https://chahanler.com/secret';
        }, 1000); // 1000 milliseconds = 1 second
    }

    // Add event listeners to TikTok and Depop images
    if (depopsImage && tiktokImage) {
        depopsImage.addEventListener('mouseover', handleDepopMouseOver);
        depopsImage.addEventListener('mouseout', handleDepopMouseOut);
        tiktokImage.addEventListener('mouseover', handleTikTokMouseOver);
        tiktokImage.addEventListener('mouseout', handleTikTokMouseOut);
    }

    // Add event listener to divider image for click event
    if (dividerImage) {
        dividerImage.addEventListener('click', redirectToSecret);
        }

    // Function to create a cloud element
    function createCloud(size, left, top) {
        const cloud = document.createElement('div'); // Create a div element
        cloud.classList.add('cloud'); // Add 'cloud' class to the div

        // Set size for the cloud
        cloud.style.width = `${size}px`; // Set width of the cloud
        cloud.style.height = `${size}px`; // Set height of the cloud

        // Set position for the cloud
        cloud.style.left = `${left}px`; // Set left position of the cloud
        cloud.style.top = `${top}px`; // Set top position of the cloud

        cloudsContainer.appendChild(cloud); // Append the cloud to the clouds container
    }

    // Create the clouds
    createCloud(150, 100, 100); // Large cloud
    createCloud(120, 40, 130); // Medium cloud right
    createCloud(100, 200, 150); // Medium cloud left
    createCloud(70, 145, 150); // Small cloud behind
    createCloud(95, 130, 160); // Small cloud in the front
});
