document.addEventListener('DOMContentLoaded', function() {
    // Menu bar slide down effect
    var topMenu = document.querySelector('.top-menu');
    if (topMenu) {
        topMenu.style.top = '-60px'; // Initially hide the menu bar
        setTimeout(function() {
            topMenu.style.top = '0'; // Slide down the menu bar
        }, 100);
    }
});
