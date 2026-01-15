document.addEventListener("DOMContentLoaded", () => {
	// Add scroll effect to header
	const header = document.querySelector("header");

	window.addEventListener("scroll", () => {
		if (window.scrollY > 50) {
			header.style.background = "rgba(13, 13, 18, 0.95)";
			header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";
		} else {
			header.style.background = "rgba(13, 13, 18, 0.8)";
			header.style.boxShadow = "none";
		}
	});

	// Add active class to current nav link
	const currentPath = window.location.pathname.split("/").pop() || "index.html";
	const navLinks = document.querySelectorAll(".nav-links a");

	navLinks.forEach((link) => {
		if (link.getAttribute("href") === currentPath) {
			link.classList.add("active");
		}
	});
});
