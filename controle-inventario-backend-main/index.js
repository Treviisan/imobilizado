const express = require('express');
var os = require('os');
const { basename } = require('path');
const PORT = 3000;
const app = express();
app.use(express.json());

const allowCors = (req, res, next) => {

    res.header("Access-Control-Allow-Origin", "*"); // colocar os dominios permitidos | ex: 127.0.0.1:3000

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials, X-Access-Token, X-Key");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS, PATCH");

    res.header("Access-Control-Allow-Credentials", "false");

    next();
}

app.use(allowCors);

app.use('/', require('./route/helloRoute.js'));
app.use('/', require('./route/empresaRoute.js'));
app.use('/', require('./route/localRoute.js'));
app.use('/', require('./route/usuarioRoute.js'));
app.use('/', require('./route/grupousuarioRoute.js'));
app.use('/', require('./route/principalRoute.js'));
app.use('/', require('./route/produtoRoute.js'));
app.use('/', require('./route/grupoRoute.js'));
app.use('/', require('./route/centrocustoRoute.js'));
app.use('/', require('./route/fornecedorRoute.js'));
app.use('/', require('./route/empresaRoute.js'));
app.use('/', require('./route/grupoRoute.js'));
app.use('/', require('./route/centrocustoRoute.js'));
app.use('/', require('./route/imobilizadoRoute.js'));
app.use('/', require('./route/imobilizadoinventarioRoute.js'));
app.use('/', require('./route/nfeRoute.js'));
app.use('/', require('./route/valorRoute.js'));
app.use('/', require('./route/inventarioRoute.js'));
app.use('/', require('./route/usuarioinventarioRoute.js'));
app.use('/', require('./route/usuarioinventarioRoute.js'));
app.use('/', require('./route/lancamentoRoute.js'));
app.use('/', require('./route/parametroRoute.js'));
app.use('/', require('./route/custom/parametroRoute.js'));
app.use('/', require('./route/padraoRoute.js'));
app.use('/', require('./route/LoadFileRouter.js'));

app.listen(PORT, () => { console.log(`Servidor No Ar. Porta ${PORT}`); });