// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Show detail function
function showDetails(id) {
  // Hide all other details
  document.querySelectorAll('.makeup-details').forEach(detail => {
    detail.style.display = "none";
  });

  const detailSection = document.getElementById(id);
  if (detailSection) {
    detailSection.style.display = "block";
    detailSection.scrollIntoView({ behavior: "smooth" });
  }
}

// Back button function
function goBack() {
  document.querySelectorAll('.makeup-details').forEach(detail => {
    detail.style.display = "none";
  });
}


function scrollCarousel(direction) {
  const track = document.getElementById("carouselTrack");
  const scrollAmount = 200; // boleh ubah ikut saiz gambar

  track.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}
