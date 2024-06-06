# Clonación del repositorio e instalación de paquetes

    git https://github.com/Gilberto-Guzman-Student-Ambassadors/mslearn-react-mod
    cd mslearn-react-mod/code/0-starter

    npm install

    npm audit fix --force

    npm start

    code .

# Actualización de paquetes (Solo en caso de que sea necesario)

    npm install -g npm-check-updates

    ncu
    ncu -u

    npx npm-check-updates -u

    npm audit fix --force

Nota: Si utilizas PowerShell es posible que requieras modificar los permisos para hacer este proceo de actualización

    Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
    Set-ExecutionPolicy Restricted -Scope CurrentUser

### Exploración del código generado

    http://localhost:8080/dist/index.js
