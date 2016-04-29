module.exports = function (grunt, opt) {
    return {
        options: {
            // postProcess: ['<%= _.replace(this, that) %>', '<%= _.prettify(foo) %>'],

            prettify: {
                // mode: 'js',  // 'html' is defined by default
                condense: true,
                padcomments: true,
                indent: 0,
                brace_style: "collapse",
                indent_handlebars: false,
                indent_inner_html: false,
                indent_size: 0,
                // unformatted: ["pre"],
                wrap_line_length: 0

            },


            flatten: false,
           // expand: true,
            layout: "default.hbs",
            layoutdir: "src/templates/layouts",
            assets: "<%= globalConfig.dev %>/assets",
            partials: [
                "src/templates/pages/**/*.hbs",
                "src/templates/parts/*.hbs"
            ],
            data: ['src/templates/data/**/*.json'],
            helpers: ['src/templates/helpers/*', 'node_modules/handlebars-helper-prettify/index.js']
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
