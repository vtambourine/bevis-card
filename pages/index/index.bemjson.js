module.exports = {
    block: 'page',
    title: 'Sample card',
    styles: [
        { url: 'index.css' },
        { url: 'http://fonts.googleapis.com/css?family=PT+Sans:400,700&subset=latin,cyrillic' }
    ],
    scripts: [
        { url: 'index.js' },
        { source: '/* metrika */' }
    ],
    body: [
        {
            block: 'cards-collection',
            cards: [
                {
                    block: 'card',
                    name: 'Вениамин Тамбурин',
                    position: 'Разработчик интрфейсов геоинформационных сервисов',
                    address: 'Россия, Москва, 119021\<br\>ул. Льва Толстого, д. 16',
                    phone: 'тел.: +7 (495) 739-70-00, доб. 6861',
                    cellular: 'моб.: +7 (965) 214-08-51',
                    site: 'http://beta.maps.yandex.ru',
                    email: 'benjamin@yandex-team.ru',
                    github: 'vtambourine',
                    linkedin: 'vtambourine',
                    skype: 'vtambourine'
                },
                {
                    block: 'card',
                    name: 'Benjamin Tambourine',
                    position: 'User Interface Developer',
                    address: '16 L\'va Toltogo, Moscow',
                    phone: 'тел.: +7 (495) 739-70-00, доб. 6861',
                    cellular: 'моб.: +7 (965) 214-08-51',
                    site: 'http://beta.maps.yandex.ru',
                    email: 'benjamin@yandex-team.ru',
                    github: 'vtambourine',
                    linkedin: 'vtambourine',
                    skype: 'vtambourine'
                }
            ]
        }
    ]
};
