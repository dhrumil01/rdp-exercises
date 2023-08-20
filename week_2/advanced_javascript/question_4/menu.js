const popup = document.getElementById('popupContent');
const popupTitle = document.getElementById('popupTitle');
const recentButton = document.getElementById('recentButton');
const popularButton = document.getElementById('popularButton');
const trendingButton = document.getElementById('trendingButton');

recentButton.addEventListener('click', () => {
  popupTitle.textContent = 'Recent Content';
  popup.style.display = 'block';
});

popularButton.addEventListener('click', () => {
  popupTitle.textContent = 'Popular Content';
  popup.style.display = 'block';
});

trendingButton.addEventListener('click', () => {
  popupTitle.textContent = 'Trending Content';
  popup.style.display = 'block';
});
