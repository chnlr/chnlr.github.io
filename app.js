// Get references to HTML elements
const depopsImage = document.getElementById('depops-image');
const tiktokImage = document.getElementById('tiktok-image');
const dividerImage = document.getElementById('divider-image');
const helloSection = document.getElementById('hello-message');

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
    } else if (element === 'tiktok') {
        tiktokImage.src = 'tiktok still.png';
    }

    // Reset rotation for the divider GIF
    dividerImage.style.transform = 'rotate(0deg)';
}

// Function to play explode animation when divider is clicked
function playExplodeAnimation() {
    dividerImage.src = 'divider_explode.gif'; // Corrected file name
    setTimeout(() => {
        // After animation, redirect to secret page
        window.location.href = 'http://chahanler.com/secret';
    }, 1000); // Adjust the delay time if needed
}

// Options for the Intersection Observer
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0 // Trigger when the entire element is visible
};

// Callback function to handle intersection changes
const intersectionCallback = (entries, observer) => {
    entries.forEach(entry => {
        console.log(entry); // Log the entry object
        if (entry.isIntersecting) {
            // If the section is intersecting with the viewport, remove the hidden class
            helloSection.classList.remove('hidden');
        } else {
            // If the section is not intersecting with the viewport, add the hidden class
            helloSection.classList.add('hidden');
        }
    });
};

// Create a new Intersection Observer
const observer = new IntersectionObserver(intersectionCallback, options);

// Start observing the "Hello" section
observer.observe(helloSection);

// Add event listeners to TikTok and Depop images
depopsImage.addEventListener('mouseover', () => playGif('depops'));
depopsImage.addEventListener('mouseout', () => stopGif('depops'));
tiktokImage.addEventListener('mouseover', () => playGif('tiktok'));
tiktokImage.addEventListener('mouseout', () => stopGif('tiktok'));

// Add event listener to dividerImage to trigger explode animation on click
dividerImage.addEventListener('click', () => playExplodeAnimation());
