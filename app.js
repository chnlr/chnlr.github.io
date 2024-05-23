document.addEventListener('DOMContentLoaded', function() {
    var topMenu = document.querySelector('.top-menu');
    topMenu.style.top = '-60px';  // Start the menu slightly above the top to be fully hidden
    setTimeout(function() {
        topMenu.style.top = '0px'; // Slide down to show
    }, 100);

    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImage");
    var images = document.querySelectorAll('.asset-gallery img');
    var body = document.querySelector('body');

    images.forEach(img => {
        img.onclick = function() {
            modal.style.display = "flex";
            modalImg.src = this.src;
            body.classList.add('blur-active'); // Add class to activate blur
        }
    });

    var closeBtn = document.querySelector('.close');
    closeBtn.onclick = function() {
        modal.style.display = "none";
        body.classList.remove('blur-active'); // Remove class to deactivate blur
    }

    // Close modal on pressing ESC
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            modal.style.display = "none";
            body.classList.remove('blur-active'); // Remove class to deactivate blur
        }
    };
});
