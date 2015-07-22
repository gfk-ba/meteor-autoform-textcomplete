Package.describe({
    name: 'gfk:autoform-textcomplete',
    summary: 'jQuery textcomplete for AutoForm',
    version: '0.0.2'
});

Package.onUse(function(api) {
    api.use('templating@1.0.0');
    api.use('blaze@2.0.0');
    api.use('aldeed:autoform@4.0.0 || 5.0.0');
    api.use('mquandalle:jquery-textcomplete@0.3.9_1');

    api.addFiles([
        'autoform-textcomplete.html',
        'autoform-textcomplete.js'
    ], 'client');
});
