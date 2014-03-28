module.exports = function (config) {
    config.node('pages/index', function (nodeConfig) {
        nodeConfig.addTechs([
            [ require('enb/techs/levels'), { levels: getLevels() }],
            [ require('enb/techs/file-provider'), { target: '?.bemjson.js' } ],
            [ require('enb/techs/bemdecl-from-bemjson') ],
            require('enb/techs/deps'),
            require('enb/techs/files'),
            [ require('enb-bt/techs/bt-server') ],
            require('enb/techs/css-stylus'),
            [ require('enb/techs/html-from-bemjson'), {
                bemhtmlTarget: '?.bt.js',
                bemjsonTarget: '?.bemjson.js',
                destTargert: '?.html'
            } ]
        ]);

        nodeConfig.addTargets([
            '?.html',
            '?.css'
        ]);
    });

    function getLevels() {
        return [config.resolvePath('blocks')];
    }
};
