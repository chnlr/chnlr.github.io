document.addEventListener('DOMContentLoaded', function() {
    // Sidebar slide-in animation
    var sidebar = document.getElementById('sidebar');
    setTimeout(function() {
        sidebar.style.left = '0px'; // Slide in the sidebar
    }, 500); // Delay can be adjusted as needed

    // Depop image click functionality
    var depopImage = document.getElementById('depopImage');
    depopImage.addEventListener('click', function() {
        // Change to GIF on click and set a timeout to redirect
        depopImage.src = 'clickdepop.gif';
        setTimeout(function() {
            window.location.href = 'https://www.depop.com/chanlr/';
        }, 1400); // Delay for 1.4 seconds before redirecting
    });
});
