// by chatgpt
document.addEventListener("DOMContentLoaded", () => {
	const lightbox = document.getElementById("lightbox");
	const lightboxImg = document.getElementById("lightbox-img");
	const closeBtn = document.querySelector(".lightbox-close");

	document.querySelectorAll(".lightbox-trigger").forEach(img => {
		img.addEventListener("click", () => {
			const fullSrc = img.getAttribute("data-full");
			lightboxImg.src = fullSrc;
			lightbox.style.display = "flex";
		});
	});

	closeBtn.addEventListener("click", () => {
		lightbox.style.display = "none";
	});

	lightbox.addEventListener("click", (e) => {
		if (e.target !== lightboxImg) {
			lightbox.style.display = "none";
		}
	});
});
