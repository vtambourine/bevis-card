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
                    lang: 'ru',
                    name: 'Вениамин Тамбурин',
                    position: 'Разработчик интрфейсов',
                    address: 'Россия, Москва, 119021\<br\>ул. Льва Толстого, д. 16',
                    phone: 'тел.: +7 (495) 739-70-00, доб.: 6861',
                    cellular: 'моб.: +7 (965) 214-08-51',
                    site: 'http://beta.maps.yandex.ru',
                    email: 'benjamin@yandex-team.ru',
                    github: 'vtambourine',
                    linkedin: 'vtambourine',
                    homepage: 'http://alienstook.me'
                },
                {
                    block: 'card',
                    lang: 'en',
                    name: 'Benjamin Tambourine',
                    position: 'UI Developer',
                    address: '16, Leo Tolstoy st.\<br\>119021, Moscow, Russia',
                    phone: 'tel.: +7 (495) 739-70-00, ext. 6861',
                    cellular: 'cell.: +7 (965) 214-08-51',
                    site: 'http://beta.maps.yandex.ru',
                    email: 'benjamin@yandex-team.ru',
                    github: 'vtambourine',
                    linkedin: 'vtambourine',
                    homepage: 'http://alienstook.me'
                }
            ]
        }
    ]
};
