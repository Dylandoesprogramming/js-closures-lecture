function scrollDown() {
   window.scrollTo(0, parseInt(window.scrollY / window.innerHeight) * window.innerHeight + window.innerHeight)
}
document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners to next buttons
    var nextButtons = document.querySelectorAll(".next-button")
    for (var i = 0; i < nextButtons.length; i++) {
        nextButtons[i].addEventListener('click', function(event) {
            scrollDown()
        })
    }
})