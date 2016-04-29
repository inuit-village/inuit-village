module.exports = function (grunt, opt) {
    return {
        build: {
            files: [
                {
                    expand: true,
                    cwd: "<%= globalConfig.build %>",
                    src: "*.html",
                    dest:"<%= globalConfig.build %>"

                }
            ]
        }
    }
}