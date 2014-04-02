module.exports = function (bt) {
    bt.match('cards-collection', function (ctx) {
        ctx.setContent(ctx.getParam('cards'));
    });
};
