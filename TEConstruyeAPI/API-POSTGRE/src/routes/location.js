import {Router} from 'express';
const router =Router();
import {postLocation,getlocation, getProvince, getDistrict, getCanton} from '../controller/locationcontroller.js'
router.post('/postlocation',postLocation);
router.get('/getlocation',getlocation);
router.get('/province',getProvince);
router.get('/district',getDistrict);
router.get('/canton',getCanton);
export default router;