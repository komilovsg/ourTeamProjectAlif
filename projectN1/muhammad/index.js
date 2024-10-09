const footerData = [
    {
        title: 'ИНФОРМАЦИЯ',
        items: [
            'Златоустовские ножи в Москве и Московской области',
            'Ножевые стали',
            'О нас',
            'Условия оплаты и доставки',
            'Политика конфиденциальности'
        ]
    },
    {
        title: 'СЛУЖБА ПОДДЕРЖКИ',
        items: [
            'Контактная информация',
            'Возврат товара',
            'Карта сайта'
        ]
    },
    {
        title: 'ДОПОЛНИТЕЛЬНО',
        items: [
            'Подарочные сертификаты',
            'Партнеры',
            'Товары со скидкой'
        ]
    },
    {
        title: 'ЛИЧНЫЙ КАБИНЕТ',
        items: [
            'Личный кабинет',
            'История заказов',
            'Мои закладки',
            'Рассылка новостей'
        ]
    }
];

function createSection(title, items) {
    const section = document.createElement('div');
    section.classList.add('footer-section');

    const sectionTitle = document.createElement('h3');
    sectionTitle.textContent = title;
    section.appendChild(sectionTitle);

    const ul = document.createElement('ul');
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });
    section.appendChild(ul);

    return section;
}

const root = document.getElementById('root');
const footer = document.createElement('footer');
footer.classList.add('footer');

const footerCenter = document.createElement('div');
footerCenter.classList.add('footer-center');

footerData.forEach(sectionData => {
    const section = createSection(sectionData.title, sectionData.items);
    footerCenter.appendChild(section);
});

footer.appendChild(footerCenter);
root.appendChild(footer);
