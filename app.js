document.addEventListener('DOMContentLoaded', function() {
    var topMenu = document.querySelector('.top-menu');
    topMenu.style.top = '-60px'; // Start hidden
    setTimeout(function() {
        topMenu.style.top = '0'; // Slide down
    }, 100);

    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");
    var images = document.querySelectorAll('.asset-gallery img');

    images.forEach(img => {
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    });

    var closeBtn = document.querySelector('.close');
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Close modal on pressing ESC
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            modal.style.display = "none";
        }
    };
});
