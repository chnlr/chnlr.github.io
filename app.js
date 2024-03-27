// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle the scroll event
function handleScroll() {
    const playlists = document.querySelectorAll('.spotify-container');
    playlists.forEach(function(playlist) {
        if (isInViewport(playlist)) {
            playlist.classList.add('visible');
        }
    });
}

// Add event listener for scroll event
window.addEventListener('scroll', handleScroll);

// Initial check on page load
handleScroll();
