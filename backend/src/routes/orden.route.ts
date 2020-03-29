/*
      Configurando mis rutas para poder hacer queries de mi tabla Orden
*/
import { Router } from 'express';
const router = Router();

import {
	findOrdenMaster,
	findOrdenMasterById,
	saveOrdenMaster,
	updateOrdenMaster,
	deleteOrdenMaster,
	findOrdenDetail,
	findOrdenDetailById,
	saveOrdenDetail,
	updateOrdenDetail,
	deleteOrdenDetail,
	findConsultas,
} from '../controller/orden.controller';

router
	.route('/findMaster')
	.get(findOrdenMaster)
	.post(findOrdenMasterById);

router.route('/saveOrdenMaster').post(saveOrdenMaster);

router.route('/updateOrdenMaster').put(updateOrdenMaster);

router.route('/deleteOrdenMaster').delete(deleteOrdenMaster);

/*************************************** orden_details ***************************************/

router
	.route('/findDetail')
	.get(findOrdenDetail)
	.post(findOrdenDetailById);

router.route('/saveOrdenDetail').post(saveOrdenDetail);

router.route('/updateOrdenDetail').put(updateOrdenDetail);

router.route('/deleteOrdenDetail').delete(deleteOrdenDetail);

/*************************************** consultas ***************************************/

router.route('/findConsulta').get(findConsultas);

export default router;
