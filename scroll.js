// Variables to control the scroll effect
const scrollContainer = document.getElementById("scroll-container");
const scrollContent = document.getElementById("scroll-content");
const hiddenButtonContainer = document.getElementById(
	"hidden-button-container"
);
const mainHeader = document.getElementById("main-header");

let headerVisible = true;
let maxScrollTop = 0;

// Listen for scroll events on the container
scrollContainer.addEventListener("scroll", function () {
	const scrollTop = scrollContainer.scrollTop;
	const maxScroll = scrollContent.scrollHeight - scrollContainer.clientHeight;

	// Every time the user scrolls down, extend the page
	if (scrollTop > maxScroll * 0.9) {
		scrollContent.style.height = scrollContent.clientHeight + 100 + "px"; // Extending content height
	}

	// Update maxScrollTop if the current scrollTop is greater than the previous max
	if (scrollTop > maxScrollTop) {
		maxScrollTop = scrollTop;
	}

	// Show hidden button and move page down when scrolled up
	if (scrollTop < 1) {
		hiddenButtonContainer.style.display = "block"; // Reveal button
	} else {
		hiddenButtonContainer.style.display = "none";
	}

	// Header reappears at the bottom when scrolled off-screen
	const headerRect = mainHeader.getBoundingClientRect();
	if (headerRect.bottom < 0 && headerVisible) {
		headerVisible = false;
		// Move the header far down the page
		mainHeader.style.top = scrollContent.clientHeight + 200 + "px";
		setTimeout(() => {
			headerVisible = true; // Allow header to be scrolled onto screen again
		}, 1000); // Delay to prevent continuous repositioning
	}

	// Update pixel scrolled distance
	document.getElementById("scroll-distance").textContent =
		"Scrolled: " + maxScrollTop + "px";
	localStorage.setItem("scrollPosition", maxScrollTop);
});

// Button to navigate to the next page
const nextBtn = document.getElementById("win-btn");
nextBtn.addEventListener("click", function () {
	window.location.href = "win.html"; // Placeholder for navigation, next page not implemented yet
});
