import {Router} from 'express';
const router =Router();
import {postmaterialR, getGetMaterialR} from '../controller/materialRcontroller'
router.post('/postmaterialR',postmaterialR);
router.get('/getmaterialR',getGetMaterialR);
export default router;