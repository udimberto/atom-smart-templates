module.exports = {
    name     : 'React Component (Simple & Styled)',
    directory: false,
    params   : [
        'Name',

        'Type'
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
