const buttons = document.querySelectorAll(".view-details-btn");
const modals = document.querySelectorAll(".modal-overlay");
const closeButtons = document.querySelectorAll(".close-button");

// Open modal
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const productId = btn.getAttribute("data-product");
    document.getElementById(`modal-${productId}`).classList.add("active");
  });
});

// Close modal
closeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest(".modal-overlay").classList.remove("active");
  });
});

// Magnifier Effect
const magnifiers = document.querySelectorAll(".magnifier");
const images = document.querySelectorAll(".product-image");

images.forEach((image) => {
  const productId = image.getAttribute("data-product-id");
  const magnifier = document.getElementById(`magnifier-${productId}`);

  if (!magnifier) return;

  image.addEventListener("mousemove", (e) => {
    const rect = image.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const bgX = (x / rect.width) * 100;
    const bgY = (y / rect.height) * 100;

    magnifier.style.left = `${x - 75}px`;
    magnifier.style.top = `${y - 75}px`;
    magnifier.style.backgroundImage = `url('${image.src}')`;
    magnifier.style.backgroundSize = `${image.width * 2}px ${
      image.height * 2
    }px`;
    magnifier.style.backgroundPosition = `${bgX}% ${bgY}%`;
    magnifier.style.opacity = 1;
  });

  image.addEventListener("mouseleave", () => {
    magnifier.style.opacity = 0;
  });
});
