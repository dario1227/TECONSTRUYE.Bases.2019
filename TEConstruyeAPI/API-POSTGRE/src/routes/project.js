import {Router} from 'express';
const router =Router();
import { postProject, getProject, getEspecificP, getjustProject} from '../controller/projectconstroller'
router.post('/postproject',postProject);
router.get('/getproject',getProject);
router.get('/getOneproject',getEspecificP);
router.get('/getjustproject',getjustProject);
export default router;