document.addEventListener('DOMContentLoaded', function() {
    var sidebar = document.getElementById('sidebar');
    sidebar.style.top = '-50px'; // Start hidden above the view
    setTimeout(function() {
        sidebar.style.top = '0'; // Slide down
    }, 500);

    var depopImage = document.getElementById('depopImage');
    depopImage.addEventListener('click', function() {
        depopImage.src = 'clickdepop.gif';
        setTimeout(function() {
            window.open('https://www.depop.com/chanlr/', '_blank');
        }, 1400);
    });
});
