document.addEventListener("DOMContentLoaded", function() {
    var scrolled = false;

    // Add event listener for scroll event
    window.addEventListener('scroll', function() {
        scrolled = true;
        // Call function to show Spotify playlists when user scrolls
        showPlaylists();
    });

    // Show the Spotify playlists when the user scrolls
    function showPlaylists() {
        if (!scrolled) return;
        // Add your code to show the Spotify playlists here
        // You can animate the appearance of the playlists from the bottom
    }
});
