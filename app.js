document.addEventListener('DOMContentLoaded', function() {
    var topMenu = document.querySelector('.top-menu');
    topMenu.style.top = '-60px';  // Start the menu slightly above the top to be fully hidden
    setTimeout(function() {
        topMenu.style.top = '0px'; // Slide down to show
    }, 100);

    var depopImage = document.getElementById('depopImage');
    depopImage.addEventListener('click', function() {
        window.open('https://www.depop.com/chanlr/', '_blank'); // Open the link directly on click
        depopImage.src = 'clickdepop.gif'; // Change the image to GIF as feedback

        function openModal(img) {
            var modal = document.getElementById("myModal");
            var modalImg = document.getElementById("modalImage");
            var captionText = document.getElementById("caption");
            modal.style.display = "block";
            modalImg.src = img.src;
            captionText.innerHTML = img.alt;
        }
        
        function closeModal() {
            var modal = document.getElementById("myModal");
            modal.style.display = "none";
        }
    });
});
