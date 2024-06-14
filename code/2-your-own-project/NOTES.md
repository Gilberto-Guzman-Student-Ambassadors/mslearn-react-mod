### Creación de la estructura inicial - Creation of the initial structure

    md react-recipes; cd react-recipes
    md src
    md public

    New-Item -Path . -Name "package.json" -ItemType "file"
    echo "{}" > package.json

    npm init
    npm install snowpack
    npm install react react-dom

    npm audit fix --force

    New-Item -Path . -Name "snowpack.config.js" -ItemType "file"

    module.exports = {
        mount: {
            'public': '/',
            'src': '/dist'
        }
    }   

    New-Item -Path . -Name "package.json" -ItemType "file"

    "scripts": {
        "start": "snowpack dev",
        "build": "snowpack build"
    },


### ¡Ahora con Bash! - Now with bash!

    mkdir react-recipes && cd react-recipes
    mkdir src public

    npm init

    npm install snowpack
    npm install react react-dom

    npm audit fix --force

    touch snowpack.config.js

    module.exports = {
        mount: {
            'public': '/',
            'src': '/dist'
        }
    }   

    touch package.json

    "scripts": {
        "start": "snowpack dev",
        "build": "snowpack build"
    },

