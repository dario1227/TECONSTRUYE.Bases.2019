import {Router} from 'express';
const router =Router();
import {postClient,getClient} from '../controller/clientscontroller'
router.post('/postclient',postClient);
router.get('/getclient',getClient);
export default router;