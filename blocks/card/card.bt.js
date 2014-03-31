module.exports = function (bt) {
    bt.match('card*', function (ctx) {
        if (ctx.isFirst()) {
            ctx.setState('visible');
        }
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

    bt.match('card*__self', function (ctx) {
        ctx.setTag('article');
        ctx.setContent({
            elem: 'credential',
            content: ctx.getParam('content')
        });
    });

    bt.match('card*__credential', function (ctx) {
        ctx.setContent(ctx.getParam('content'));
    });

    bt.match('card*__title', function (ctx) {
        ctx.setTag('header');
        var fields = ['name', 'position'];
        ctx.setContent(fields.map(function (field) {
            return {
                elem: field,
                content: ctx.getParam(field)
            }
        }));
    });

    bt.match('card*__contact', function (ctx) {
        ctx.setTag('section');
        var fields = ['address', 'phone', 'cellular', 'site'];
        ctx.setContent(fields.map(function (field) {
            return {
                elem: field,
                content: ctx.getParam(field)
            }
        }));
    });

    bt.match('card*__social', function (ctx) {
        ctx.setTag('section');
        var fields = ['email', 'github', 'linkedin', 'skype'];
        ctx.setContent(fields.map(function (field) {
            return {
                elem: field,
                content: ctx.getParam(field)
            }
        }));
    });

    bt.match('card*__link', function (ctx) {
        ctx.setTag('a');
        var url = ctx.getParam('url') || '';
        var content = ctx.getParam('content') || url.replace(/^(https?:)?\/\//, '');
        ctx.setAttr('href', url);
        ctx.setContent(content);
    });

    bt.match('card*__name', function (ctx) {
        ctx.setTag('h1');
        ctx.setContent(ctx.getParam('content'));
    });

    bt.match('card*__position', function (ctx) {
        ctx.setTag('h3');
        ctx.setContent(ctx.getParam('content'));
    });

    bt.match('card*__site', function (ctx) {
        ctx.setContent({
            elem: 'link',
            url: ctx.getParam('content')
        });
    });

    bt.match([
        'card*__address',
        'card*__phone',
        'card*__cellular',
        'card*__site'
    ], function (ctx) {
        ctx.setContent(ctx.getParam('content'));
    });

    bt.match('card*__email', function (ctx) {
        var email = ctx.getParam('content');
        ctx.setContent({
            elem: 'link',
            url: 'mailto:' + email,
            content: email
        });
    });

    bt.match('card*__github', function (ctx) {
        ctx.setContent({
            elem: 'link',
            url: 'http://github.com/' + ctx.getParam('content')
        });
    });

    bt.match('card*__linkedin', function (ctx) {
        ctx.setContent({
            elem: 'link',
            url: 'http://linkedin.com/' + ctx.getParam('content')
        });
    });

    bt.match('card*__skype', function (ctx) {
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
