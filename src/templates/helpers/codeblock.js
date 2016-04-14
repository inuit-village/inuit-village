module.exports.register = function (Handlebars, options)  {
    Handlebars.registerHelper('codeBlock', function (options)  {
        var str = options.fn(this);
        var randomLink = 'code-'+Math.round(Math.random()*1000);
        var block = [
            str,
            '<div class="prettyprint-anchor" data-slide-down="'+randomLink+'">see code</div>',
            '<pre class="prettyprint prettyprint--with-anchor" id="'+randomLink+'">',
            Handlebars.Utils.escapeExpression(str),
            '</pre>'
        ];
        return block.join('');
    });
};