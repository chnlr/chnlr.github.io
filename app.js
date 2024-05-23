document.addEventListener('DOMContentLoaded', function() {
    var sidebar = document.getElementById('sidebar');
    sidebar.style.top = '-50px'; // Start hidden above the view
    setTimeout(function() {
        sidebar.style.top = '0'; // Slide down
    }, 500);

    var depopImage = document.getElementById('depopImage');
    depopImage.addEventListener('click', function() {
        window.open('https://www.depop.com/chanlr/', '_blank'); // Open the link directly on click
        depopImage.src = 'clickdepop.gif'; // Change the image to GIF as feedback
    });
});
