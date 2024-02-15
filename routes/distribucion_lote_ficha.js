import { Router } from "express";
import httpDistribucion_lote_ficha from "../controllers/distribucion_lote_ficha.js"
import { check } from "express-validator";
import {validarCampos} from "../middelwares/validator.js";

const router=new Router()

router.get('/all', httpDistribucion_lote_ficha.getAllDistribucion_lote_ficha);
router.get('/distribuciones/:id', httpDistribucion_lote_ficha.getAllDistribucion_lote_fichaid);
router.post('/guardar',[
    check("presupuesto","debe ingresar un presupuesto").isNumeric(),
    check("ficha","ingrese el nombre dela ficha para continuar").notEmpty(),
    validarCampos
], httpDistribucion_lote_ficha.postAgregarDistribucion_lote_ficha);
router.put('/distribuciones/:id', httpDistribucion_lote_ficha.putEditarDistribucion_lote_ficha);
router.put('/distribuciones/activar/:id', httpDistribucion_lote_ficha.putDistribucion_lote_fichaActivar);
router.put('/distribuciones/desactivar/:id', httpDistribucion_lote_ficha.putDistribucion_lote_fichaDesactivar);

export default router; 