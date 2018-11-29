module.exports = {
    name     : 'React Module (Smart)',
    directory: true,
    params   : [
        'Name',
    ],
    rules    : (config) => {
        return({
            items: [
                {
                    destinationFile   : 'index.js',
                    sourceTemplateFile: 'index.template'
                },
                {
                    destinationFile   : (config.Name + 'Component.jsx'),
                    sourceTemplateFile: 'component.template'
                },
            ]
        });
    },
}
