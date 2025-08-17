document.addEventListener("DOMContentLoaded", () => {
  const projectsBtn = document.getElementById("projectsBtn");
  const certificatesBtn = document.getElementById("certificatesBtn");
  const projectsContent = document.getElementById("projectsContent");
  const certificatesContent = document.getElementById("certificatesContent");

  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");

  // Tab toggle logic
  projectsBtn.addEventListener("click", () => {
    projectsContent.classList.add("active");
    certificatesContent.classList.remove("active");
    projectsBtn.classList.add("active");
    certificatesBtn.classList.remove("active");
  });

  certificatesBtn.addEventListener("click", () => {
    certificatesContent.classList.add("active");
    projectsContent.classList.remove("active");
    certificatesBtn.classList.add("active");
    projectsBtn.classList.remove("active");
  });

  // Certificate click to fullscreen
  document.querySelectorAll(".certificate-thumb").forEach(img => {
    img.addEventListener("click", () => {
      modalImg.src = img.src;
      modal.classList.add("active");
    });
  });

  // Close modal on click
  modal.addEventListener("click", () => {
    modal.classList.remove("active");
    modalImg.src = "";
  });
});
