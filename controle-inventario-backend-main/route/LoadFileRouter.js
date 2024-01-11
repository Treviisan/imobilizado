const express = require('express');
const router = express.Router();
const upload = require("../config/multer");
const uploadfileSrv = require("../service/LoadFileService");

router.post('/api/loadfile', upload.single("file"), async function(req, res) {

    const id_empresa = req.body.id_empresa
    const id_local = req.body.id_local;
    const id_usuario = req.body.id_usuario;

    console.log('id_empresa', id_empresa, 'id_local', id_local, 'id_usuario', id_usuario);

    try {

        const lsLista = await uploadfileSrv.create(req, res, id_empresa, id_local, id_usuario);

        res.status(200).json(lsLista);

    } catch (err) {


        console.log(err);

        res.status(500).json({ erro: 'BAK-END', tabela: 'UPLOAD', message: err.message });

    }
});

router.post('/api/loadfileV2', upload.single("file"), async function(req, res) {

    try {

        const lsLista = await uploadfileSrv.createV2(req, res);

        res.status(200).json(lsLista);

    } catch (err) {

        res.status(500).json({ erro: 'BAK-END', tabela: 'UPLOAD', message: err.message });

    }
});

router.delete('/api/loadfile', upload.single("file"), uploadfileSrv.delete);

module.exports = router;