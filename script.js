document.addEventListener("DOMContentLoaded", function () {
    const colorPalette = [
    "rgb(0, 128, 255)",  // Bright Blue
    "rgb(255, 255, 0)",  // Yellow
    "rgb(0, 255, 255)",  // Cyan
    "rgb(255, 165, 0)",  // Orange
    "rgb(255, 0, 0)",    // Red
    "rgb(0, 255, 128)",  // Greenish Cyan
    "rgb(0, 0, 0)",      // Black
    "rgb(255, 255, 255)",// White
    "rgb(0, 255, 0)"
    ];

    // A mapping of background colors to text colors that work well for color-blindness
    const textColorMap = {
    "rgb(0, 128, 255)": "rgb(255, 255, 255)",  // White on Blue
    "rgb(255, 255, 0)": "rgb(0, 0, 0)",        // Black on Yellow
    "rgb(0, 255, 255)": "rgb(0, 0, 0)",        // Black on Cyan
    "rgb(255, 165, 0)": "rgb(0, 0, 0)",        // Black on Orange
    "rgb(255, 0, 0)": "rgb(255, 255, 255)",    // White on Red
    "rgb(0, 255, 128)": "rgb(0, 0, 0)",        // Black on Greenish Cyan
    "rgb(0, 0, 0)": "rgb(255, 255, 255)",      // White on Black
    "rgb(255, 255, 255)": "rgb(0, 0, 0)",      // Black on White
    "rgb(0, 255, 0)": "rgb(0, 0, 0)",          // Black on Green
    };

    // Function to determine the text color based on background color
    function updateTextColorForColorBlindness(backgroundColor) {
        const textColor = textColorMap[backgroundColor] || "rgb(0, 0, 0)";  // Default to black if no match

        // Apply to specific elements with class 'header' and 'intro'
        document.querySelectorAll(".header, .intro").forEach((el) => {
            el.style.color = textColor;
        });
    }

    let colorIndex = 0;
    let isPaused = false;
    let interval;

    // Function to change the background and color indicators
    function changeBackground() {
        if (isPaused) return;

        const currentColor = colorPalette[colorIndex];
        const nextColor = colorPalette[(colorIndex + 1) % colorPalette.length];

        document.body.style.backgroundColor = currentColor;
        document.getElementById("currentColor").style.backgroundColor = currentColor;
        document.getElementById("nextColor").style.backgroundColor = nextColor;

        // Update text color based on background color
        updateTextColorForColorBlindness(currentColor);

        colorIndex = (colorIndex + 1) % colorPalette.length;
    }

    // Function to toggle pause and unpause
    function togglePause() {
        isPaused = !isPaused;

        const currentColor = colorPalette[colorIndex];
        const nextColor = colorPalette[(colorIndex + 1) % colorPalette.length];
        
        const currentDiv = document.getElementById("currentColor");
        const nextDiv = document.getElementById("nextColor");

        if (isPaused) {
            clearInterval(interval); // Stop the cycle when paused
            // Set both halves to the next color when paused
            currentDiv.style.backgroundColor = currentColor;
            nextDiv.style.backgroundColor = currentColor;
        } else {
            changeBackground(); // Change immediately when resumed
            interval = setInterval(changeBackground, 2000); // Restart the color cycle
            // Revert to half-and-half with the current and next color
            currentDiv.style.backgroundColor = currentColor;
            nextDiv.style.backgroundColor = nextColor;
        }
    }

    // Add event listener to the circle (the togglePause button)
    const toggleButton = document.getElementById("togglePause");

    if (toggleButton) {
        toggleButton.addEventListener("click", togglePause);
    } else {
        console.error("Element with ID 'togglePause' not found!");
    }

    // Start the color cycle when the page loads
    function startColorCycle() {
        changeBackground();
        interval = setInterval(changeBackground, 2000); // Start the color changing loop
    }

    startColorCycle(); // Start the cycle initially
});







//info button
function showModal(){
    $(".modal").toggleClass("show")
   
    if ($(".modal").hasClass("show")) {
        // Reset text immediately when modal is shown
        $(".modal").text("This is an interactive website inspired by Extraordinary Facts Relating to the Vision of Colours!");

        // Change text after 3 seconds
        setTimeout(() => {
            if ($(".modal").hasClass("show")) { // Ensure modal is still visible
                $(".modal").text("Click on the circle on the right to lock in the most comfortable background and text colour for the website!");
            }
        }, 2000);
    }
}

$(".button").click(showModal)

$(".modal").click(showModal)






const cursorTag = document.querySelector(".cursor")
const ball = cursorTag.querySelector(".inside")

document.addEventListener("mousemove", function(event){
    ball.style.left = event.pageX + "px"
    ball.style.top = event.pageY + "px" 
})












// function changeColor(){
//     $(this).toggleClass("text")
// }

// $(".words").click(changeColor)





// document.addEventListener("DOMContentLoaded", function () {
//     const colorPalette = [
//         "rgb(0, 128, 255)",  // Bright Blue (Deuteranopia & Protanopia)
//         "rgb(255, 255, 0)",  // Yellow (Deuteranopia, Protanopia, Tritanopia)
//         "rgb(0, 255, 255)",  // Cyan (Deuteranopia & Protanopia)
//         "rgb(255, 165, 0)",  // Orange (Deuteranopia, Protanopia, Tritanopia)
//         "rgb(255, 0, 0)",    // Red (Tritanopia, High Contrast)
//         "rgb(0, 255, 128)",  // Greenish Cyan (Tritanopia)
//         "rgb(0, 0, 0)",      // Black (High Contrast)
//         "rgb(255, 255, 255)",// White (High Contrast)
//         "rgb(0, 255, 0)"     // Green (High Contrast)  
//     ];

//     // A mapping of background colors to text colors that work well for color-blindness
//     const textColorMap = {
//         "rgb(0, 128, 255)": "rgb(255, 255, 255)",  // White on Blue
//         "rgb(255, 255, 0)": "rgb(0, 0, 0)",        // Black on Yellow
//         "rgb(0, 255, 255)": "rgb(0, 0, 0)",        // Black on Cyan
//         "rgb(255, 165, 0)": "rgb(0, 0, 0)",        // Black on Orange
//         "rgb(255, 0, 0)": "rgb(255, 255, 255)",    // White on Red
//         "rgb(0, 255, 128)": "rgb(0, 0, 0)",        // Black on Greenish Cyan
//         "rgb(0, 0, 0)": "rgb(255, 255, 255)",      // White on Black
//         "rgb(255, 255, 255)": "rgb(0, 0, 0)",      // Black on White
//         "rgb(0, 255, 0)": "rgb(0, 0, 0)",          // Black on Green
//     };