module.exports = {
    name     : 'React Component (Simple)',
    directory: false,
    params   : [
        'Name',
    ],
    rules    : (config) => {
        return({
            items: [
                {
                    destinationFile   : (config.Name + 'Component.jsx'),
                    sourceTemplateFile: 'component.template'
                },
            ]
        });
    },
}
