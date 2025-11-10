
const galleryItems = document.querySelectorAll('.gallery-item img');
const viewer = document.getElementById('imageViewer');
const fullImage = document.getElementById('fullImage');
const closeViewer = document.getElementById('closeViewer');


galleryItems.forEach(img => {
  img.addEventListener('click', () => {
    viewer.style.display = 'flex';
    fullImage.src = img.src;
  });
});

closeViewer.addEventListener('click', () => {
  viewer.style.display = 'none';
});

viewer.addEventListener('click', (e) => {
  if (e.target === viewer) {
    viewer.style.display = 'none';
  }
});
