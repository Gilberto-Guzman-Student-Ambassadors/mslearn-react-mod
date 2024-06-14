# Clonación del repositorio e instalación de paquetes - Repository cloning and package installation

    git https://github.com/Gilberto-Guzman-Student-Ambassadors/mslearn-react-mod
    cd mslearn-react-mod/code/0-starter

    npm install

    npm audit fix --force

    npm start

    code .

# Actualización de paquetes (Solo en caso de que sea necesario) - Package upgrades (Only if necessary)

    npm install -g npm-check-updates

    ncu
    ncu -u

    npx npm-check-updates -u

    npm audit fix --force

Nota: Si utilizas PowerShell es posible que requieras modificar los permisos para hacer este proceo de actualización

Note: If you are using PowerShell you may need to modify the permissions to perform this upgrade process

    Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
    Set-ExecutionPolicy Restricted -Scope CurrentUser

### Exploración del código generado - Exploration of the generated code

    http://localhost:8080/dist/index.js
