module.exports.register = function (Handlebars, options)  {
    Handlebars.registerHelper('html2txt', function (options)  {
        var str = options.fn(this);
        return Handlebars.Utils.escapeExpression(str);
    });
};