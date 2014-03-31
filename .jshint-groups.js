module.exports = {
    options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        noempty: true,
        nonew: true,
        undef: true,
        unused: true,
        trailing: true,
        maxlen: 120,
        quotmark: 'single'
    },
    groups: {
        client: {
            options: {
                browser: true,
                predef: ['modules']
            },
            includes: [
                'blocks/**/*.js',
            ],
            excludes: [
                'blocks/**/*.{bt,test}.js',
            ]
        },

        'bt templates': {
            options: {
                predef: ['module']
            },
            includes: [
                'blocks/**/*.bt.js'
            ]
        }
    }
};
