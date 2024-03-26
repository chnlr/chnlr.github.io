// Get references to HTML elements
const depopsImage = document.getElementById('depops-image');
const tiktokImage = document.getElementById('tiktok-image');
const dividerImage = document.getElementById('divider-image');

// Function to preload images
const preloadImages = (urls) => {
  urls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};

// Function to change the image source to the animated GIF
function playGif(element, divider) {
    if (element === 'depops') {
        depopsImage.src = 'depops wiggle.gif';
        dividerImage.style.transform = 'rotate(-180deg)'; // Rotate the divider GIF in reverse
    } else if (element === 'tiktok') {
        tiktokImage.src = 'tiktok wiggle.gif';
        dividerImage.style.transform = 'rotate(180deg)'; // Rotate the divider GIF once
    }
}

// Function to change the image source back to the static image
function stopGif(element, divider) {
    if (element === 'depops') {
        depopsImage.src = 'depops still.png';
        dividerImage.style.transform = 'rotate(0deg)';
    } else if (element === 'tiktok') {
        tiktokImage.src = 'tiktok still.png';
        dividerImage.style.transform = 'rotate(0deg)'; // Reset rotation for the divider GIF
    }
}

// Function to play explode animation when divider is clicked
function playExplodeAnimation() {
    dividerImage.src = 'divider explode.gif';
    setTimeout(() => {
        // After animation, redirect to secret page
        window.location.href = 'http://chahanler.com/secret';
    }, 1000); // Adjust the delay time if needed
}

// Add event listener to dividerImage to trigger explode animation on click
dividerImage.addEventListener('click', () => {
    // Play the click sound
    const clickSound = new Audio('click.mp3');
    clickSound.play();
    playExplodeAnimation();
});

// Add scroll event listener to fade out content when scrolling down
window.addEventListener('scroll', () => {
    const helloMessage = document.getElementById('hello-message');
    const links = document.getElementById('links');
    const scrollPosition = window.scrollY;

    // Calculate the distance from the top of the page to the "Hello" message
    const helloMessageOffsetTop = helloMessage.offsetTop;

    // Check if the scroll position is greater than or equal to the offset of the "Hello" message
    if (scrollPosition >= helloMessageOffsetTop) {
        // Add class to fade out the links
        links.classList.add('fade-out-hide');
    } else {
        // Remove class to show the links
        links.classList.remove('fade-out-hide');
    }
});

// URLs of the GIFs to preload
const gifUrls = ['depops wiggle.gif', 'tiktok wiggle.gif'];

// Preload GIFs
preloadImages(gifUrls);
