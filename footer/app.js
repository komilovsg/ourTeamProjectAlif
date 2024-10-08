document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    
    const footer = document.createElement('footer');
    footer.style.backgroundColor = '#141414';
    footer.style.display = 'flex';
    footer.style.flexDirection = 'column';
    footer.style.color = 'white';

    // Создание первого сектора с информацией
    const sectionOne = createSection([
        {
            title: 'ИНФОРМАЦИЯ',
            links: [
                'Златоустовские ножи в Москве и Московской области',
                'Ножевые стали',
                'О нас',
                'Условия оплаты и доставки',
                'Политика конфиденциальности'
            ]
        },
        {
            title: 'СЛУЖБА ПОДДЕРЖКИ',
            links: [
                'Контактная информация',
                'Возврат товара',
                'Карта сайта'
            ]
        },
        {
            title: 'ДОПОЛНИТЕЛЬНО',
            links: [
                'Подарочные сертификаты',
                'Партнеры',
                'Товары со скидкой'
            ]
        },
        {
            title: 'ЛИЧНЫЙ КАБИНЕТ',
            links: [
                'Личный кабинет',
                'История заказов',
                'Мои закладки',
                'Рассылка новостей'
            ]
        }
    ]);
    
    footer.appendChild(sectionOne);

    // Горизонтальная линия
    footer.appendChild(createHr());

    // Создание второго сектора с контактами
    const sectionTwo = createSection([
        {
            title: 'КОНТАКТЫ',
            content: createContacts()
        },
        {
            title: 'ПОЛЕЗНЫЕ ССЫЛКИ',
            links: ['Способы оплаты и доставки']
        },
        {
            title: 'НАША ГАРАНТИЯ',
            content: createGuaranteeText() // Use a function to create the guarantee text
        },
        {
            title: 'НОВОСТНАЯ РАССЫЛКА',
            content: createNewsletterForm()
        }
    ]);
    
    footer.appendChild(sectionTwo);
    
    // Функция для создания текста гарантии с ссылкой
    function createGuaranteeText() {
        const guaranteeDiv = document.createElement("div");
        const guaranteeText = document.createElement("p");
        guaranteeText.className = "textNashimPravilam"
        
        // Используем innerHTML для задания текста с ссылкой
        guaranteeText.innerHTML = `Недовольны своей покупкой? Вы можете вернуть её в течение 30 дней с даты получения, согласно <a href='#' style='color: #ffca28; text-decoration: none;'>нашим правилам</a>.`;
        
        guaranteeDiv.appendChild(guaranteeText);
        return guaranteeDiv; // Возвращаем созданный элемент
    }
    

    // Еще одна горизонтальная линия
    footer.appendChild(createHr());

    // Финальный текст
    const sectionThree = createFinalSection();
    footer.appendChild(sectionThree);

    // Добавляем footer в root
    root.appendChild(footer);
});

// Функция для создания секции с текстом и ссылками
function createSection(sections) {
    const section = document.createElement('section');
    section.style.display = 'flex';
    section.style.justifyContent = 'space-around';
    section.style.alignItems = 'start';

    sections.forEach(item => {
        const div = document.createElement('div');
        div.style.width = '400px';
        div.style.display = 'flex';
        div.style.flexDirection = 'column';
        div.style.gap = '10px';

        const h2 = document.createElement('h2');
        h2.textContent = item.title;
        div.appendChild(h2);

        if (item.links) {
            item.links.forEach(linkText => {
                const link = document.createElement('a');
                link.href = '#';
                link.textContent = linkText;
                link.className = "footer-link";
                div.appendChild(link);
            });
        }

        if (item.content) {
            div.appendChild(item.content);
        }

        section.appendChild(div);
    });

    return section;
}

// Функция для создания горизонтальной линии
function createHr() {
    const hr = document.createElement('hr');
    hr.style.width = '90%';
    hr.style.marginTop = '20px';
    hr.style.marginBottom = '20px';
    return hr;
}

function createContacts() {
    const container = document.createElement('div');

    // Массив для хранения данных контактов
    const contacts = [
        {
            icon: './ourTeamProjectAlif/shakhkron/img/phone.png',
            text: '8 (800) 777-49-67'
        },
        {
            icon: './ourTeamProjectAlif/shakhkron/img/clocke.png',
            text: 'Пн-Пт 7:00 - 16:00 (МСК)'
        },
        {
            icon: './ourTeamProjectAlif/shakhkron/img/locationLogo.png',
            text: 'Златоуст, ул. Шоссейная, д. 1, офис «6Б»'
        },
        {
            icon: './ourTeamProjectAlif/shakhkron/img/mailLogo.png',
            text: 'info@zlatmax.ru'
        }
    ];

    // Создание строк для каждого контакта
    contacts.forEach(contact => {
        const contactDiv = document.createElement('div');
        contactDiv.style.display = 'flex';
        contactDiv.style.alignItems = 'center';
        contactDiv.style.marginBottom = '10px'; // Отступ между строками

        const img = document.createElement('img');
        img.src = contact.icon;
        img.alt = 'Icon';
        img.style.width = '20px'; // Можно задать нужный размер
        img.style.marginRight = '10px'; // Отступ между иконкой и текстом

        const p = document.createElement('p');
        p.textContent = contact.text;

        contactDiv.appendChild(img);
        contactDiv.appendChild(p);
        container.appendChild(contactDiv);
    });

    // Социальные иконки
    const socialIconsDiv = document.createElement('div');
    socialIconsDiv.style.display = 'flex';
    socialIconsDiv.style.alignItems = 'center';
    socialIconsDiv.style.marginTop = '20px'; // Отступ сверху для иконок

    // Массив с путями к иконкам
    const socialIcons = [
        './ourTeamProjectAlif/shakhkron/img/fFacebook.png',
        './ourTeamProjectAlif/shakhkron/img/tTelegram.png',
        './ourTeamProjectAlif/shakhkron/img/vViber.png',
        './ourTeamProjectAlif/shakhkron/img/wWhatsapp.png'
    ];

    socialIcons.forEach(iconSrc => {
        const img = document.createElement('img');
        img.src = iconSrc;
        img.alt = 'Social Icon';
        img.style.width = '33px'; // Задайте нужный размер
        img.style.marginRight = '10px'; // Отступ между иконками
        socialIconsDiv.appendChild(img);
    });

    container.appendChild(socialIconsDiv);
    return container;
}



// Функция для создания формы подписки
function createNewsletterForm() {
    const div = document.createElement('div');
    
    const p = document.createElement('p');
    p.textContent = 'Подпишитесь прямо сейчас!';
    div.appendChild(p);

    const input = document.createElement('input');
    input.type = 'email';
    input.className="mailInput"
    input.placeholder = 'example@gmail.com';
    div.appendChild(input);

    const agreementDiv = document.createElement('div');
    agreementDiv.style.display = 'flex';
    agreementDiv.style.alignItems = 'center';
    agreementDiv.style.gap = '20px';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.style.width = '10px';
    checkbox.style.height = '10px';

    const p2 = document.createElement('p');
    p2.textContent = 'Я прочитал Условия соглашения и согласен с условиями';

    agreementDiv.appendChild(checkbox);
    agreementDiv.appendChild(p2);
    div.appendChild(agreementDiv);

    return div;
}

// Функция для создания финального текста в футере
function createFinalSection() {
    const section = document.createElement('section');
    section.style.display = 'flex';
    section.style.justifyContent = 'space-between';
    section.style.alignItems = 'center';
    section.style.padding = '0 160px';

    const p1 = document.createElement('p');
    // p1.style.width = "680px";
    p1.className="lastText"
    p1.textContent = `Все материалы, размещенные на сайте, носят справочный характер и не являются публичной офертой, определяемой положениями Статьи 437 Гражданского кодекса Российской Федерации. При копировании материалов гиперссылка на www.zlatmax.ru обязательна!`;
    
    const p2 = document.createElement('p');
    p2.textContent = 'Златоустовские ножи www.zlatmax.ru ©';

    section.appendChild(p1);
    section.appendChild(p2);

    return section;
}
