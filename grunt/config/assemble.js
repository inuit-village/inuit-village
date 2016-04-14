module.exports = function (grunt, opt) {
    return {
        options: {
            flatten: false,
           // expand: true,
            layout: "default.hbs",
            layoutdir: "src/templates/layouts",
            assets: "<%= globalConfig.dev %>/assets",
            partials: [
                "src/templates/pages/*.hbs",
                "src/templates/parts/*.hbs"
            ],
            data: ['src/templates/data/**/*.json'],
            helpers: ['src/templates/helpers/*']
            // plugins: ['grunt-assemble-permalinks']
        },
        dev: {
            files: [
                {
                    expand: true,
                    cwd: 'src/templates/pages/',
                    src: '**/*.hbs',
                    extDot: 'last',
                    dest: '<%= globalConfig.dev %>/',
                    ext: '.html'
                }
            ]
        },
        // dev: {
        //     files: {
        //         "<%= globalConfig.dev %>/": ["src/templates/pages/**/*.hbs"]
        //     }
        // },
        //
        build: {
            options: {
                layout: "default.hbs",
                layoutdir: "temp/layouts",
                assets: "<%= globalConfig.build %>/assets",
                partials: [
                    "temp/pages/*.hbs",
                    "temp/parts/*.hbs"
                ],
            },
            files: {
                "<%= globalConfig.build %>": ["temp/pages/**/*.hbs"]
            }
        }
    }
}
