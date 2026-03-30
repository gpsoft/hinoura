// by chatgpt
document.addEventListener("DOMContentLoaded", () => {
	const lightbox = document.getElementById("lightbox");
	const lightboxImg = document.getElementById("lightbox-img");
	const closeBtn = document.querySelector(".lightbox-close");
	const hide = () => {
		lightbox.classList.remove('visible');
		lightboxImg.src = "";
	};

	document.querySelectorAll(".lightbox-trigger").forEach(img => {
		img.addEventListener("click", () => {
			const fullSrc = img.getAttribute("data-full");
			lightboxImg.src = fullSrc;
			lightbox.classList.add('visible');
		});
	});

	closeBtn.addEventListener("click", () => {
		hide();
	});

	lightbox.addEventListener("click", (e) => {
		if (e.target !== lightboxImg) {
			hide();
		}
	});
});
