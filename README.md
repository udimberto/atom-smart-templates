# React Smart Templates
JavaScript templates to front-end developers, using simple codes as components structure.

## Special designed to Atom Editor
Yep, just support [Atom](https://atom.io/), for now.
So, if you already have Atom as your default editor, proceed to the next steps.

## Install Steps

1. Install the awesome Atom plugin `atom-smart-template`, developed by @[AlexeySokolov](https://github.com/AlexeySokolov):
    [Package](https://atom.io/packages/atom-smart-template) | [GitHub](https://github.com/AlexeySokolov/atom-smart-template)

2. Clone this repository:
    ```
    git clone https://github.com/udimberto/atom-react-templates.git
    ```
    ```
    rsync -av ./atom-react-templates/ ~/.atom/smart-templates/
    ```

## Available component templates
All includes `prop-types` by default, visit [GitHub](https://github.com/facebook/prop-types) page to usage details.

|               | Folder | Constructor | State | `react-emotion` |
|---------------|--------|-------------|-------|-----------------|
| Simple        | ❌ | ❌ | ❌ | ❌ |
| Simple Styled | ❌ | ❌ | ❌ | ✅ |
| Smart         | ❌ | ✅ | ✅ | ❌ |
| Smart Module  | ✅ | ✅ | ✅ | ❌ |

## [Usage](https://atom.io/packages/atom-smart-template)
Just right click on your project's Three and select **Create files from template**.
Check it out the atom [Smart Templates](https://atom.io/packages/atom-smart-template) package page to more details.

## In case of missing dependencies
Install then:
```
cd myprojectfolder
```
```
npm install --save-dev prop-types react-emotion
```
