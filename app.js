// Function to check if an element is partially in the viewport
function isPartiallyInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= window.innerHeight && // Top of element is in viewport
        rect.bottom >= 0 && // Bottom of element is in viewport
        rect.left <= window.innerWidth && // Left side of element is in viewport
        rect.right >= 0 // Right side of element is in viewport
    );
}

// Function to handle the scroll event
function handleScroll() {
    const playlists = document.querySelectorAll('.spotify-container');
    playlists.forEach(function(playlist) {
        if (isPartiallyInViewport(playlist)) {
            playlist.classList.add('visible');
        }
    });
}

// Add event listener for scroll event
window.addEventListener('scroll', handleScroll);

// Initial check on page load
handleScroll();
