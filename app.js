document.addEventListener('DOMContentLoaded', function () {
    const depopsImage = document.getElementById('depops-image');
    const tiktokImage = document.getElementById('tiktok-image');
    const dividerImage = document.getElementById('divider-image');
    const cloudsContainer = document.getElementById('clouds-container');
    const secondCloudContainer = document.getElementById('second-cloud-container');
    const droopyAudio = document.getElementById('droopy-audio');
    const musicPlayImage = document.getElementById('music-play-image');
    const musicPauseImage = document.getElementById('music-pause-image');
    const depopsClickImage = document.getElementById('depops-click-image');
    
    // Preload the GIFs
    const musicPlayGif = new Image();
    const musicPauseGif = new Image();
    musicPlayGif.src = 'musicplay.gif';
    musicPauseGif.src = 'musicpause.gif';
    
    // Flag to track whether the gifs have played
    let musicPlayGifPlayed = false;
    let musicPauseGifPlayed = false;

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

    // Function to handle click event on Depop image
function handleDepopClick() {
    // Hide the still image and show the click image
    depopsClickImage.style.display = 'block';

    // Set a timeout to hide the click image after a short delay
    setTimeout(function() {
        depopsClickImage.style.display = 'none';
        // Open the Depop link in a new tab
        window.open('https://depop.com/chanlr', '_blank');
    }, 500); // Adjust the delay as needed
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

    // Function to create a circle element inside a cloud
    function createCircle(cloud, size, left, top, isClickable = false) {
        const circle = document.createElement('div'); // Create a div element
        circle.classList.add('circle'); // Add 'circle' class to the div

        // Set size for the circle
        circle.style.width = `${size}px`; // Set width of the circle
        circle.style.height = `${size}px`; // Set height of the circle

        // Set position for the circle
        circle.style.left = `${left}px`; // Set left position of the circle
        circle.style.top = `${top}px`; // Set top position of the circle

        // Add click event listener to the circle if it's clickable
        if (isClickable) {
            circle.addEventListener('click', function() {
                window.location.href = 'https://chahanler.com/download';
            });
        }

        cloud.appendChild(circle); // Append the circle to the cloud

        return circle; // Return the circle element
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
        createCircle(cloud, size * 0.63, size * 0.67, size * 0.92, true); // Small circle in the front

        cloudsContainer.appendChild(cloud); // Append the cloud to the clouds container
    }

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

    // Create the first cloud with custom animation properties
    createCloud(150, 100, 100, 5, 0); // Large cloud with animation duration of 5 seconds, no delay

    // Create the second cloud with custom animation properties
    createSecondCloud(90, 10, 10, 3, 2); // Second cloud with animation duration of 3 seconds, starting after 2 seconds

    // Function to toggle play/pause of the audio and switch between play and pause images
    function togglePlayPause() {
        if (droopyAudio.paused) {
            droopyAudio.play();
            // Hide play image and show pause image
            musicPlayImage.style.display = 'none';
            musicPauseImage.style.display = 'block';
            // Trigger play gif animation
            if (!musicPauseGifPlayed) {
                musicPauseImage.src = 'musicpause.gif';
                musicPauseGifPlayed = true;
            }
            // After gif animation ends, switch back to pause png
            setTimeout(showPauseImage, 1000); // Adjust time according to gif duration
        } else {
            droopyAudio.pause();
            // Hide pause image and show play image
            musicPauseImage.style.display = 'none';
            musicPlayImage.style.display = 'block';
            // Trigger pause gif animation
            if (!musicPlayGifPlayed) {
                musicPlayImage.src = 'musicplay.gif';
                musicPlayGifPlayed = true;
            }
            // After gif animation ends, switch back to play png
            setTimeout(showPlayImage, 1000); // Adjust time according to gif duration
        }
    }

    // Function to show play image and hide pause image
    function showPlayImage() {
        musicPlayImage.style.display = 'block';
        musicPauseImage.style.display = 'none';
        musicPauseGifPlayed = false; // Reset flag
        musicPlayImage.src = 'musicplay.png';
    }

    // Function to show pause image and hide play image
    function showPauseImage() {
        musicPauseImage.style.display = 'block';
        musicPlayImage.style.display = 'none';
        musicPlayGifPlayed = false; // Reset flag
        musicPauseImage.src = 'musicpause.png';
    }

    // Add event listener to play/pause images to toggle play/pause and trigger gif animation
    if (musicPlayImage && musicPauseImage) {
        musicPlayImage.addEventListener('click', togglePlayPause);
        musicPauseImage.addEventListener('click', togglePlayPause);
    }
});
