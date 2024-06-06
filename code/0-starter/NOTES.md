# Clonación del repositorio e instalación de paquetes en Windows

    git https://github.com/Gilberto-Guzman-Student-Ambassadors/mslearn-react-mod
    cd mslearn-react-mod/code/0-starter

    npm install -g npm-check-updates

    Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
    Set-ExecutionPolicy Restricted -Scope CurrentUser

    npx npm-check-updates -u

    npm audit fix --force

    npm start

    code .

### Exploración del código generado

    http://localhost:8080/dist/index.js
