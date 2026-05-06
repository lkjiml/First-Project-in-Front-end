// Function to add a small glow effect when images are hovered
const images = document.querySelectorAll('img');

images.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.boxShadow = "0 0 15px #00ffcc";
    });

    img.addEventListener('mouseout', () => {
        img.style.boxShadow = "none";
    });
});
// 1. Get the current count from the browser's storage
let visitCount = localStorage.getItem('page_view_count');

// 2. Check if it exists. If it does, increase it. If not, start at 1.
if (visitCount) {
    visitCount = Number(visitCount) + 1;
} else {
    visitCount = 1;
}

// 3. Save the new updated number back to storage
localStorage.setItem('page_view_count', visitCount);

// 4. Find the 'span' in your HTML and update its text
document.getElementById('visit-counter').innerHTML = visitCount;

console.log("Gaming Website Loaded Successfully!");