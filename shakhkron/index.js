// Элемент root
const root = document.getElementById('root');

// Создание контейнера
const container = document.createElement('div');
container.className = 'container';

// Создание навигации (меню)
const nav = document.createElement('nav');

// Названия вкладок
const tabs = [
  { id: 'description', name: 'Описание' },
  { id: 'characteristics', name: 'Характеристика' },
  { id: 'reviews', name: 'Отзывы' },
  { id: 'delivery', name: 'Доставка' }
];

// Создаем кнопки для каждой вкладки
tabs.forEach(tab => {
  const button = document.createElement('button');
  button.className = 'tab';
  button.textContent = tab.name;
  button.dataset.tab = tab.id;

  // Добавляем класс активной кнопке по умолчанию
  if (tab.id === 'description') {
    button.classList.add('active');
  }

  // Обработчик клика для каждой кнопки
  button.addEventListener('click', () => {
    document.querySelectorAll('section').forEach(section => section.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(btn => btn.classList.remove('active'));

    document.getElementById(tab.id).classList.add('active');
    button.classList.add('active');
  });

  nav.appendChild(button);
});

// Добавляем навигацию в контейнер
container.appendChild(nav);

// Создание секций
const descriptionSection = document.createElement('section');
descriptionSection.id = 'description';
descriptionSection.classList.add('active');
descriptionSection.textContent = 'Легкий удобный нож с клинком, идеален для точных работ...';
container.appendChild(descriptionSection);

const characteristicsSection = document.createElement('section');
characteristicsSection.id = 'characteristics';
const table = document.createElement('table');
const characteristics = [
  ['Общая длина', '227 мм'],
  ['Длина клинка', '112 мм'],
  ['Толщина клинка', '2.9 мм']
];
characteristics.forEach(([label, value]) => {
  const row = document.createElement('tr');
  const labelCell = document.createElement('td');
  labelCell.textContent = label;
  const valueCell = document.createElement('td');
  valueCell.textContent = value;
  row.appendChild(labelCell);
  row.appendChild(valueCell);
  table.appendChild(row);
});
characteristicsSection.appendChild(table);
container.appendChild(characteristicsSection);

const reviewsSection = document.createElement('section');
reviewsSection.id = 'reviews';

const reviews = [
  { name: 'Никита Панков', content: 'Lorem ipsum dolor sit amet...', stars: 5 },
  { name: 'Саша Осейчук', content: 'Lorem ipsum dolor sit amet...', stars: 4 }
];

reviews.forEach(review => {
  const reviewDiv = document.createElement('div');
  reviewDiv.className = 'review';

  const avatar = document.createElement('div');
  avatar.className = 'avatar';
  reviewDiv.appendChild(avatar);

  const contentDiv = document.createElement('div');
  contentDiv.className = 'content';
  
  const nameParagraph = document.createElement('p');
  nameParagraph.textContent = review.name;
  contentDiv.appendChild(nameParagraph);

  const reviewParagraph = document.createElement('p');
  reviewParagraph.textContent = review.content;
  contentDiv.appendChild(reviewParagraph);

  const starsSpan = document.createElement('span');
  starsSpan.className = 'stars';
  starsSpan.textContent = '★'.repeat(review.stars);
  contentDiv.appendChild(starsSpan);

  reviewDiv.appendChild(contentDiv);
  reviewsSection.appendChild(reviewDiv);
});
container.appendChild(reviewsSection);

const deliverySection = document.createElement('section');
deliverySection.id = 'delivery';

const deliveryOptions = [
  { service: 'Почта России', price: '300 ₽ (5-8 дней)' },
  { service: 'Почта России', price: '300 ₽ (5-8 дней)' }
];

deliveryOptions.forEach(option => {
  const deliveryDiv = document.createElement('div');
  deliveryDiv.className = 'delivery-option';

  const serviceSpan = document.createElement('span');
  serviceSpan.textContent = option.service;
  deliveryDiv.appendChild(serviceSpan);

  const priceSpan = document.createElement('span');
  priceSpan.textContent = option.price;
  deliveryDiv.appendChild(priceSpan);
  deliverySection.appendChild(deliveryDiv);
});
container.appendChild(deliverySection);

// Добавляем контейнер в root
root.appendChild(container);