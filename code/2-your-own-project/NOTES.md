### Creación de la estructura inicial

    md react-recipes; cd react-recipes
    md src
    md public

    New-Item -Path . -Name "package.json" -ItemType "file"
    echo "{}" > package.json

    npm init
    npm install --save-dev snowpack
    npm install react react-dom

    npm audit fix --force
