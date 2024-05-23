document.addEventListener('DOMContentLoaded', function() {
    var sidebar = document.getElementById('sidebar');
    setTimeout(function() {
        sidebar.style.top = '0px'; // Slide down the sidebar
    }, 500);

    var depopImage = document.getElementById('depopImage');
    depopImage.addEventListener('click', function() {
        depopImage.src = 'clickdepop.gif';
        setTimeout(function() {
            window.location.href = 'https://www.depop.com/chanlr/';
        }, 1400);
    });
});