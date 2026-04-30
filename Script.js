(function() {
  // Функция создания одной звезды
  function createStar() {
      const star = document.createElement('div');
      star.classList.add('star');

      // Случайные параметры звезды
      const size = Math.random() * 3 + 1;           // Размер: 1–4px
      const posX = Math.random() * 100;             // Позиция X: 0–100%
      const posY = Math.random() * 100;             // Позиция Y: 0–100%
      const duration = Math.random() * 3 + 2;       // Длительность анимации: 2–5 сек
      const opacity = Math.random() * 0.6 + 0.2;    // Прозрачность: 0.2–0.8
      const glow = Math.random() * 15 + 5;          // Светящийся эффект: 5–20px

      // Применяем стили через CSS-переменные
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${posX}%`;
      star.style.top = `${posY}%`;
      star.style.setProperty('--duration', `${duration}s`);
      star.style.setProperty('--opacity', opacity);
      star.style.setProperty('--glow', `${glow}px`);

      // Добавляем звезду на страницу
      document.body.appendChild(star);
  }

  // Создать начальные 50 звёзд с небольшой задержкой для плавного эффекта
  for (let i = 0; i < 50; i++) {
      setTimeout(createStar, Math.random() * 2000);
  }

  // Добавлять новые звёзды каждые 2 секунды (постоянный эффект)
  setInterval(createStar, 2000);

})();

document.addEventListener('DOMContentLoaded', () => {
  const genreFilter = document.getElementById('genre-filter');
  const platformFilter = document.getElementById('platform-filter');
  const resetButton = document.getElementById('reset-filters');
  const gameCards = document.querySelectorAll('.game-card');

  const filterGames = () => {
    const genre = genreFilter.value;
    const platform = platformFilter.value;

    gameCards.forEach(card => {
      const gameGenre = card.querySelector('.genre').textContent;
      const gamePlatform = card.querySelector('.platform').textContent;

      const matchesGenre = genre === 'all' || gameGenre === genre;
      const matchesPlatform = platform === 'all' || gamePlatform.includes(platform);

      card.style.display = matchesGenre && matchesPlatform ? 'block' : 'none';
    });
  };

  genreFilter.addEventListener('change', filterGames);
  platformFilter.addEventListener('change', filterGames);
  resetButton.addEventListener('click', () => {
    genreFilter.value = 'all';
    platformFilter.value = 'all';
    filterGames();
  });

  // Инициализация
  filterGames();
});

// Script.js
document.addEventListener('DOMContentLoaded', function() {
  const genreFilter = document.getElementById('genre-filter');
  const resetButton = document.getElementById('reset-filters');
  const gameCards = document.querySelectorAll('.game-card');

  // Функция для фильтрации игр по жанру
  function filterGames() {
    const selectedGenre = genreFilter.value;

    gameCards.forEach(card => {
      const gameGenre = card.querySelector('.genre').textContent.toLowerCase();

      if (selectedGenre === 'all' || gameGenre === selectedGenre) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // Обработчик для фильтра жанров
  genreFilter.addEventListener('change', filterGames);

  // Обработчик для кнопки сброса
  resetButton.addEventListener('click', function() {
    genreFilter.value = 'all';
    filterGames();
  });

  // Инициализация - показать все игры при загрузке
  filterGames();
});