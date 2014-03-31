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
                },
                {
                    elem: 'social',
                    content: ctx.getParam('social'),
                    email: ctx.getParam('email'),
                    github: ctx.getParam('github'),
                    linkedin: ctx.getParam('linkedin'),
                    skype: ctx.getParam('skype')
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
        var fields = ['name', 'position'];
        ctx.setContent(fields.map(function (field) {
            return {
                elem: field,
                content: ctx.getParam(field)
            }
        }));
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

    bt.match('card__social', function (ctx) {
        ctx.setTag('section');
        var fields = ['email', 'github', 'linkedin', 'skype'];
        ctx.setContent(fields.map(function (field) {
            return {
                elem: field,
                content: ctx.getParam(field)
            }
        }));
    });

    bt.match('card__link', function (ctx) {
        ctx.setTag('a');
        var url = ctx.getParam('url') || '';
        var content = ctx.getParam('content') || url.replace(/^(https?:)?\/\//, '');
        ctx.setAttr('href', url);
        ctx.setContent(content);
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
        ctx.setContent(ctx.getParam('content'));
    });

    bt.match('card__credential', function (ctx) {
        ctx.setContent(ctx.getParam('content'));
    });

    bt.match('card__email', function (ctx) {
        var email = ctx.getParam('content');
        ctx.setContent({
            elem: 'link',
            url: 'mailto:' + email,
            content: email
        });
    });

    bt.match('card__github', function (ctx) {
        ctx.setContent({
            elem: 'link',
            url: 'http://github.com/' + ctx.getParam('content')
        });
    });

    bt.match('card__linkedin', function (ctx) {
        ctx.setContent({
            elem: 'link',
            url: 'http://linkedin.com/' + ctx.getParam('content')
        });
    });

    bt.match('card__skype', function (ctx) {
        var skypeName = ctx.getParam('content');
        ctx.setContent([
            'skype: ',
            {
                elem: 'link',
                url: 'skype:' + skypeName,
                content: skypeName
            }
        ]);
    });
};
