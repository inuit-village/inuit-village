module.exports.register = function (Handlebars, options)  {
    Handlebars.registerHelper('printPartial', function (options)  {


            var str = options.fn(this);
            // Get the partial with the given name. This is a string.
            var partial = Handlebars.partials[str];
            // Return empty string if the partial is not defined
            // if (!partial) return str;
            // Compile and call the partial with this as context
            // return new Handlebars.SafeString(Handlebars.compile(partial)(this));

       

    });
};

