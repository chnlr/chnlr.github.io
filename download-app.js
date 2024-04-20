document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');

    // Function to handle form submission and initiate download process
    document.getElementById("downloadForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const tiktokLink = document.getElementById("tiktokLink").value;
        if (isValidTikTokLink(tiktokLink)) {
            downloadTikTokVideo(tiktokLink);
        } else {
            alert("Invalid TikTok video link");
        }
    });

    // Function to check if the provided TikTok link is valid
    function isValidTikTokLink(link) {
        // You can add your validation logic here
        return link.trim() !== "";
    }

    // Function to initiate the TikTok video download process
    function downloadTikTokVideo(videoUrl) {
        fetch('https://cors-anywhere.herokuapp.com/' + videoUrl)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = 'tiktok_video.mp4'; // You can set the filename here
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            })
            .catch(error => console.error('Error:', error));
    }

    // Generate random circles with individual oscillation times
    for (let i = 0; i < 10; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');

        // Set random position and size for each circle
        const size = Math.random() * 100 + 50; // Random size between 50 and 150 pixels
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const offset = Math.random() * 2 * Math.PI; // Random offset for phase of oscillation

        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;

        // Function to update opacity periodically with individual oscillation times
        function updateOpacity() {
            const phase = (Date.now() / 1000) + offset; // Add offset to current time
            const transparency = Math.sin(phase) * 0.35 + 0.45; // Oscillate between 0.1 and 0.8
            circle.style.opacity = transparency;
            requestAnimationFrame(updateOpacity);
        }

        // Start updating opacity
        updateOpacity();

        container.appendChild(circle);
    }
});
