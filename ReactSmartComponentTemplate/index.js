module.exports = {
    name     : 'React Component (Smart)',
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
