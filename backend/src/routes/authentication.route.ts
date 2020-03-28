/*
      Configurando mis rutas para poder hacer queries de mi tabla Tax
*/
import { Router } from 'express';
const router = Router();

import { authentication } from '../controller/authentication.controller';

router.route('/').post(authentication);

export default router;
