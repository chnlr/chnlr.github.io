document.addEventListener('DOMContentLoaded', function() {
    var depopImage = document.getElementById('depopImage');
    depopImage.addEventListener('click', function() {
        // Change to GIF on click and set a timeout to redirect
        depopImage.src = 'clickdepop.gif';
        setTimeout(function() {
            window.location.href = 'https://www.depop.com/chanlr/';
        }, 1400); // Delay for 1 second before redirecting
    });
});
