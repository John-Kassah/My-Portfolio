document.addEventListener("DOMContentLoaded", function() {
    // Initialize the Web Development animation without autoplay
    var webDevAnimation = lottie.loadAnimation({
        container: document.getElementById("lottie-web-dev-animation"),
        renderer: "svg",
        loop: true,
        autoplay: false,
        path: "../assets/webDevAnimation.json"
    });

    // Initialize the Back End animation without autoplay
    var backEndAnimation = lottie.loadAnimation({
        container: document.getElementById("lottie-back-end-animation"),
        renderer: "svg",
        loop: true,
        autoplay: false,
        path: "../assets/backend animation.json"
    });

    // Options for the Intersection Observer (adjust threshold as needed)
    var options = {
        threshold: 0.5  // 50% of the element must be visible
    };

    // Callback function for the observer
    var observerCallback = function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {

                webDevAnimation.play();

                // Delay the start of animations by 2 seconds
                setTimeout(function() {
                    backEndAnimation.play();
                }, 2000);
                // Unobserve the element so this only happens once
                observer.unobserve(entry.target);
            }
        });
    };

    // Create the Intersection Observer
    var observer = new IntersectionObserver(observerCallback, options);

    // Select the animation container elements
    var webDevContainer = document.getElementById("lottie-web-dev-animation");
    var backEndContainer = document.getElementById("lottie-back-end-animation");

    // Observe both containers
    if (webDevContainer) observer.observe(webDevContainer);
    if (backEndContainer) observer.observe(backEndContainer);
});
// js/script.js


particlesJS.load('my-services-particles', '../json/particlesjs-config-background.json', function() {
    console.log('Particles.js configuration loaded successfully.');
  });


  
