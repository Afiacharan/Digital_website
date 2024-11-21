// Function to animate counting
function animateCounter(element, start, end, duration) {
    let current = start;
    const stepTime = Math.abs(Math.floor(duration / (end - start)));
    
    const timer = setInterval(() => {
        current++;
        element.textContent = current + "+"; // Add "+" sign to the number

        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Start the counting animation when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    animateCounter(document.getElementById('project-count'), 1, 2000, 2000); // From 1 to 2000
    animateCounter(document.getElementById('experience-count'), 1, 18, 2000); // From 1 to 18
    animateCounter(document.getElementById('employer-count'), 1, 80, 2000); // From 1 to 80
    animateCounter(document.getElementById('award-count'), 1, 40, 2000); // From 1 to 40
});
// ....................................................................................................
document.getElementById("left-btn").addEventListener("click", function() {
    // Show the first two cards
    document.getElementById("card-1").classList.remove("d-none");
    document.getElementById("card-2").classList.remove("d-none");

    // Hide the other two cards
    document.getElementById("card-3").classList.add("d-none");
    document.getElementById("card-4").classList.add("d-none");
});

document.getElementById("right-btn").addEventListener("click", function() {
    // Show the third and fourth cards
    document.getElementById("card-3").classList.remove("d-none");
    document.getElementById("card-4").classList.remove("d-none");

    // Hide the first two cards
    document.getElementById("card-1").classList.add("d-none");
    document.getElementById("card-2").classList.add("d-none");
});
