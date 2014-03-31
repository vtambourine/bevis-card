module.exports = function (bt) {
    bt.match('page', function (ctx) {
        ctx.setTag('body');
        var scripts = ctx.getParam('scripts').map(function (script) {
           return {
               elem: 'script',
               url: script.url,
               source: script.source
           };
        });
        ctx.setContent([ctx.getParam('body'), scripts]);
        var stylesheets = ctx.getParam('styles').map(function (style) {
            return {
                elem: 'stylesheet',
                url: style.url
            };
        });
        return [
            '<!doctype html>',
            {
                elem: 'html',
                content: [
                    {
                        elem: 'head',
                        content: [
                            {
                                elem: 'meta',
                                charset: 'utf-8'
                            },
                            {
                                elem: 'title',
                                content: ctx.getParam('title')
                            },
                            stylesheets
                        ]
                    },
                    ctx.getJson(),
                ]
            }
        ];
    });

    bt.match('page__html', function (ctx) {
        ctx.disableCssClassGeneration();
        ctx.setTag('html');
        ctx.setContent(ctx.getParam('content'));
    });

    bt.match('page__head', function (ctx) {
        ctx.disableCssClassGeneration();
        ctx.setTag('head');
        ctx.setContent(ctx.getParam('content'));
    });

    bt.match('page__meta', function (ctx) {
        ctx.disableCssClassGeneration();
        ctx.setTag('meta');
        ctx.setAttr('charset', ctx.getParam('charset'));
    });

    bt.match('page__title', function (ctx) {
        ctx.disableCssClassGeneration();
        ctx.setTag('title');
        ctx.setContent(ctx.getParam('content'));
    });

    bt.match('page__script', function (ctx) {
        ctx.disableCssClassGeneration();
        ctx.setTag('script');
        ctx.setAttr('type', 'text/javascript');
        var url = ctx.getParam('url');
        if (url) {
            ctx.setAttr('src', url);
        }
        var source = ctx.getParam('source');
        if (source) {
            ctx.setContent(source);
        }
    });

    bt.match('page__stylesheet', function (ctx) {
        ctx.disableCssClassGeneration();
        ctx.setTag('link');
        ctx.setAttr('rel', 'stylesheet');
        ctx.setAttr('href', ctx.getParam('url'));
    });
};
