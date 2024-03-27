document.addEventListener("DOMContentLoaded", function() {
    var scrolled = false;
    var playlist1Shown = false;
    var playlist2Shown = false;

    // Add event listener for scroll event with debouncing
    window.addEventListener('scroll', debounce(function() {
        if (!playlist1Shown && isElementInViewport(document.getElementById('playlist1'))) {
            playlist1Shown = true;
            slideUp(document.getElementById('playlist1'));
        }
        if (!playlist2Shown && isElementInViewport(document.getElementById('playlist2'))) {
            playlist2Shown = true;
            slideUp(document.getElementById('playlist2'));
        }
    }, 100)); // Adjust the delay as needed

    // Function to slide up an element
    function slideUp(element) {
        element.style.transition = 'transform 0.5s ease';
        element.style.transform = 'translateY(-100%)';
    }

    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});

// Function to debounce scroll event
function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}
