<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="icon" href="16666.png" type="image/x-icon">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>｡+.｡☆ﾟ:;｡+ﾟ ☆*ﾟ¨ﾟﾟ･*:..ﾞ</title>
    <link rel="stylesheet" href="style.css"> <!-- Link to external CSS file -->
        <!-- Preload the GIF -->
    <link rel="preload" href="chahanler.gif" as="image">
</head>
<body>
    <div id="container">
        <img id="chahanler-gif" src="chahanler.gif" alt="CHAHANLER">
        <div class="links fade-out" id="links">
            <!-- Display the regular "TikTok" image -->
            <a href="https://tiktok.com/@chahanler" target="_blank">
                <img id="tiktok-image" class="link-image" src="tiktokstill.png" alt="TikTok">
            </a>
            <!-- Display the divider image -->
            <img id="divider-image" class="link-image" src="divider still.png" alt="Divider">
            <!-- Display the regular "Depop" image -->
            <a href="https://depop.com/chanlr" target="_blank">
                <img id="depops-image" class="link-image" src="depopstill.png" alt="Depop">
            </a>
        </div>
    </div>

    <!-- Spotify Playlist Embeds -->
    <div id="playlist-container" class="spotify-container">
        <iframe style="border-radius: 12px" src="https://open.spotify.com/embed/playlist/18868Cj2hswk7QrEs1DkQM?utm_source=generator&theme=0" width="100%" height="352" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>

    <div id="playlist2-container" class="spotify-container">
        <iframe id="playlist2" style="border-radius: 12px" src="https://open.spotify.com/embed/playlist/7cOm43yf9qVxU28z9wWMNA?utm_source=generator" width="100%" height="352" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <script src="app.js"></script> <!-- Include JavaScript file -->
    <script>
        window.addEventListener('scroll', function() {
            let chahanlerGif = document.getElementById('chahanler-gif');
            let num = (window.scrollY / window.innerHeight) * 3.8;
            chahanlerGif.style.filter = 'blur(' + num + 'px)';

            let links = document.getElementById('links');
            links.style.filter = 'blur(' + num + 'px)'; // Apply blur effect to the links container
        });

        // Get references to TikTok and Depop images
        const tiktokImage = document.getElementById('tiktok-image');
        const depopsImage = document.getElementById('depops-image');
        const dividerImage = document.getElementById('divider-image');

        // Function to change the image source to the animated GIF
        function playGif(element, gifName) {
            element.src = gifName; // Update the source of the element passed as parameter
        }

        // Function to change the image source back to the static image
        function stopGif(element, staticImage) {
            element.src = staticImage; // Update the source of the element passed as parameter
        }

        // Add event listeners to TikTok, Depop, and Divider images
        if (tiktokImage && depopsImage && dividerImage) {
            tiktokImage.addEventListener('mouseover', () => playGif(tiktokImage, 'tiktokwiggle.gif'));
            tiktokImage.addEventListener('mouseout', () => stopGif(tiktokImage, 'tiktokstill.png'));
            depopsImage.addEventListener('mouseover', () => playGif(depopsImage, 'depopwiggle.gif'));
            depopsImage.addEventListener('mouseout', () => stopGif(depopsImage, 'depopstill.png'));

            // For the divider image
            dividerImage.addEventListener('mouseover', () => {
                dividerImage.style.transform = 'rotate(180deg)'; // Rotate 180 degrees on mouseover
            });
            dividerImage.addEventListener('mouseout', () => {
                dividerImage.style.transform = 'rotate(0deg)'; // Rotate back to 0 degrees on mouseout
            });
        }
    </script>
</body>
</html>
