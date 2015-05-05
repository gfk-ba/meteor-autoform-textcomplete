AutoForm.addInputType('textcomplete', {
    template: 'afTextcomplete',
    valueConverters: {
        'string': function (val) {
            return val;
        },
        'stringArray': function (val) {
            if (typeof val === 'string' && val.length > 0) {
                return linesToArray(val);
            }
            return val;
        },
        'number': AutoForm.Utility.stringToNumber,
        'numberArray': function (val) {
            if (typeof val === 'string' && val.length > 0) {
                var arr = linesToArray(val);
                return _.map(arr, function (item) {
                    return AutoForm.Utility.stringToNumber(item);
                });
            }
            return val;
        },
        'boolean': AutoForm.Utility.stringToBool,
        'booleanArray': function (val) {
            if (typeof val === 'string' && val.length > 0) {
                var arr = linesToArray(val);
                return _.map(arr, function (item) {
                    return AutoForm.Utility.stringToBool(item);
                });
            }
            return val;
        },
        'date': AutoForm.Utility.stringToDate,
        'dateArray': function (val) {
            if (typeof val === 'string' && val.length > 0) {
                var arr = linesToArray(val);
                return _.map(arr, function (item) {
                    return AutoForm.Utility.stringToDate(item);
                });
            }
            return val;
        }
    },
    contextAdjust: function (context) {
        if (typeof context.atts.maxlength === 'undefined' && typeof context.max === 'number') {
            context.atts.maxlength = context.max;
        }
        return context;
    }
});

function linesToArray(text) {
    text = text.split('\n');
    var lines = [];
    _.each(text, function (line) {
        line = $.trim(line);
        if (line.length) {
            lines.push(line);
        }
    });
    return lines;
}


Template.afTextcomplete.helpers({
    atts: function () {
        var atts = _.clone(this.atts);

        delete atts.textcompleteStrategies;
        delete atts.textcompleteOptions;

        return atts;
    }
});

Template.afTextcomplete.rendered = function () {
    var $input = this.$('textarea'),
        atts = this.data.atts;

    $input.textcomplete(atts.textcompleteStrategies, atts.textcompleteOptions);
};

Template.afTextcomplete.destroyed = function () {
    var $input = this.$('textarea');

    $input.textcomplete('destroy');
};
