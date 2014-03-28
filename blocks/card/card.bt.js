module.exports = function (bt) {
    bt.match('card', function (ctx) {
        ctx.setContent({
            elem: 'self',
            content: [
                {
                    elem: 'title',
                    name: ctx.getParam('name'),
                    position: ctx.getParam('position')
                },
                {
                    elem: 'contact',
                    address: ctx.getParam('address'),
                    phone: ctx.getParam('phone'),
                    cellular: ctx.getParam('cellular'),
                    site: ctx.getParam('site')
                }
            ]
        });
    });

    bt.match('card__self', function (ctx) {
        ctx.setTag('article');
        ctx.setContent({
            elem: 'credential',
            content: ctx.getParam('content')
        });
    });

    bt.match('card__title', function (ctx) {
        ctx.setTag('header');
        ctx.setContent([
            {
                elem: 'name',
                content: ctx.getParam('name')
            },
            {
                elem: 'position',
                content: ctx.getParam('position')
            }
        ])
    });

    bt.match('card__contact', function (ctx) {
        ctx.setTag('section');
        var fields = ['address', 'phone', 'cellular', 'site'];
        ctx.setContent(fields.map(function (field) {
            return {
                elem: field,
                content: ctx.getParam(field)
            }
        }));
    });

    bt.match('card__name', function (ctx) {
        ctx.setTag('h1');
        ctx.setContent(ctx.getParam('content'));
    });

    bt.match('card__position', function (ctx) {
        ctx.setTag('h3');
        ctx.setContent(ctx.getParam('content'));
    });

    bt.match('card__site', function (ctx) {
        ctx.setContent({
            elem: 'link',
            url: ctx.getParam('content')
        });
    });

    bt.match([
        'card__address',
        'card__phone',
        'card__cellular',
        'card__site'
    ], function (ctx) {
//        ctx.setTag('p');
        ctx.setContent(ctx.getParam('content'));
    });

    bt.match('card__credential', function (ctx) {
        ctx.setContent(ctx.getParam('content'));
    });

    bt.match('card__link', function (ctx) {
        ctx.setTag('a');
        var siteUrl = ctx.getParam('url');
        ctx.setAttr('href', siteUrl);
        ctx.setContent(siteUrl.replace(/^(https?:)?\/\//, ''));
    });
};
