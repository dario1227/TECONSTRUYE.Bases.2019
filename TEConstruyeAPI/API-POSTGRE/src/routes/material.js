import {Router} from 'express';
const router =Router();
import {postMaterial, getMaterial, getprice} from '../controller/materialcontroller'
router.post('/postmaterial',postMaterial);
router.get('/getmaterial',getMaterial);
router.get('/getprice/:name',getprice);
export default router;