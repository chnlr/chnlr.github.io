document.addEventListener("DOMContentLoaded", function() {
    var scrolled = false;
    var popupShown = false; // Flag to track if popup has been shown

    // Add event listener for scroll event with debouncing
    window.addEventListener('scroll', debounce(function() {
        if (!popupShown && !scrolled) {
            scrolled = true;
            showPopup(); // Call showPopup function when user scrolls
        }
    }, 100)); // Adjust the delay as needed

    // Function to show the popup modal when the user scrolls
    function showPopup() {
        document.getElementById('popup-modal').style.display = 'block';
        popupShown = true; // Set flag to true indicating popup has been shown
    }

    // Add event listener to the play button
    document.getElementById('play-button').addEventListener('click', function() {
        // Hide the popup modal
        document.getElementById('popup-modal').style.display = 'none';

        // Start playing the second playlist
        document.getElementById('playlist2').contentWindow.postMessage('{"method":"play"}', 'https://open.spotify.com');
    });

    // Call showPopup function after a certain delay (e.g., 5 seconds)
    setTimeout(showPopup, 5000);
});
