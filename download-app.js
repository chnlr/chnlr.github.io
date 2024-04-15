// JavaScript for generating random circles with individual oscillation times
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('body');

    // Generate 10 random circles
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


