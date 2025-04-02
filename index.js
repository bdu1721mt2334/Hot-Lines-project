//Top Offer Zone

var topBar = document.getElementById("top");
var closeBtn = document.getElementById("close");

closeBtn.addEventListener("click", function () {
    topBar.style.display = "none";
});


//Photo sliding

var sidenav = document.getElementById("sidenav");
var menuicon = document.getElementById("menuicon");
var closenav = document.getElementById("closenav"); // Updated ID reference

menuicon.addEventListener("click", function() {
    sidenav.style.right = "0";
});

closenav.addEventListener("click", function() {
    sidenav.style.right = "-50%";
});


//photo slider

var rightclickBtn = document.getElementById("rightclick")
var leftclickBtn = document.getElementById("leftclick")
const images = [
    document.getElementById("big1"),
    document.getElementById("big2"),
    document.getElementById("big3")
];

let currentIndex = 0; // Track current image index

function showImage(index) {
    images.forEach(img => img.classList.add("hidden")); // Hide all images
    images[index].classList.remove("hidden"); // Show selected image
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length; // Move right
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Move left
    showImage(currentIndex);
}

// Event listeners for click actions
document.getElementById("rightclick").addEventListener("click", nextImage);
document.getElementById("leftclick").addEventListener("click", prevImage);