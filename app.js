document.addEventListener('DOMContentLoaded', function () {
    // Get references to HTML elements
    const depopsImage = document.getElementById('depops-image');
    const tiktokImage = document.getElementById('tiktok-image');
    const dividerImage = document.getElementById('divider-image');
    const cloudsContainer = document.getElementById('clouds-container');
    const secondCloudContainer = document.getElementById('second-cloud-container');

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

    // Function to create a cloud element with custom animation
    function createCloud(size, left, top, animationDuration, animationDelay) {
        const cloud = document.createElement('div'); // Create a div element
        cloud.classList.add('cloud'); // Add 'cloud' class to the div

        // Set position for the cloud
        cloud.style.left = `${left}px`; // Set left position of the cloud
        cloud.style.top = `${top}px`; // Set top position of the cloud

        // Create circle elements inside the cloud
        createCircle(cloud, size, size * 0.5, size * 0.5); // Large circle
        createCircle(cloud, size * 0.8, size * 1.1, size * 0.69); // Medium circle right
        createCircle(cloud, size * 0.67, size * 0.2, size * 0.75); // Medium circle left
        createCircle(cloud, size * 0.47, size * 0.67, size * 0.75); // Small circle behind
        createCircle(cloud, size * 0.63, size * 0.67, size * 0.92); // Small circle in the front

        // Set custom animation properties
        cloud.style.animationDuration = `${animationDuration}s`; // Set animation duration
        cloud.style.animationDelay = `${animationDelay}s`; // Set animation delay

        cloudsContainer.appendChild(cloud); // Append the cloud to the clouds container
    }

    // Function to create a circle element inside a cloud
    function createCircle(cloud, size, left, top) {
        const circle = document.createElement('div'); // Create a div element
        circle.classList.add('circle'); // Add 'circle' class to the div

        // Set size for the circle
        circle.style.width = `${size}px`; // Set width of the circle
        circle.style.height = `${size}px`; // Set height of the circle

        // Set position for the circle
        circle.style.left = `${left}px`; // Set left position of the circle
        circle.style.top = `${top}px`; // Set top position of the circle

        cloud.appendChild(circle); // Append the circle to the cloud
    }

    // Create the first cloud with custom animation properties
    createCloud(150, 100, 100, 5, 0); // Large cloud with animation duration of 5 seconds, no delay

// Function to create the second cloud element with custom animation
function createSecondCloud(size, left, top, animationDuration, animationDelay) {
    const cloud = document.createElement('div'); // Create a div element
    cloud.classList.add('cloud'); // Add 'cloud' class to the div

    // Set position for the cloud
    cloud.style.left = `${left}px`; // Set left position of the cloud
    cloud.style.top = `${top}px`; // Set top position of the cloud

    // Create circle elements inside the cloud
    createCircle(cloud, size, size * 0.5, size * 0.5); // Large circle
    createCircle(cloud, size * 0.8, size * 1.1, size * 0.69); // Medium circle right
    createCircle(cloud, size * 0.67, size * 0.2, size * 0.75); // Medium circle left
    createCircle(cloud, size * 0.47, size * 0.67, size * 0.75); // Small circle behind
    createCircle(cloud, size * 0.63, size * 0.67, size * 0.92); // Small circle in the front

    // Set custom animation properties
    cloud.style.animationDuration = `${animationDuration}s`; // Set animation duration
    cloud.style.animationDelay = `${animationDelay}s`; // Set animation delay

    secondCloudContainer.appendChild(cloud); // Append the cloud to the second cloud container
}

// Function to create a circle element inside a cloud
function createCircle(cloud, size, left, top) {
    const circle = document.createElement('div'); // Create a div element
    circle.classList.add('circle'); // Add 'circle' class to the div

    // Set size for the circle
    circle.style.width = `${size}px`; // Set width of the circle
    circle.style.height = `${size}px`; // Set height of the circle

    // Set position for the circle
    circle.style.left = `${left}px`; // Set left position of the circle
    circle.style.top = `${top}px`; // Set top position of the circle

    cloud.appendChild(circle); // Append the circle to the cloud
}

// Create the second cloud with custom animation properties
createSecondCloud(80, 10, 10, 3, 2); // Second cloud with animation duration of 3 seconds, starting after 2 seconds
});
