
const galleryItems = document.querySelectorAll('.gallery-item img');
const viewer = document.getElementById('imageViewer');
const fullImage = document.getElementById('fullImage');
const closeViewer = document.getElementById('closeViewer');

// When an image is clicked, show full view
galleryItems.forEach(img => {
  img.addEventListener('click', () => {
    viewer.style.display = 'flex';
    fullImage.src = img.src;
  });
});

// Close when clicking X or background
closeViewer.addEventListener('click', () => {
  viewer.style.display = 'none';
});

viewer.addEventListener('click', (e) => {
  if (e.target === viewer) {
    viewer.style.display = 'none';
  }
});
