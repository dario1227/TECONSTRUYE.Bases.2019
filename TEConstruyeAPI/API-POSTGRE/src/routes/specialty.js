import {Router} from 'express';
const router =Router();
import {postSpecialty,getSpecialty} from '../controller/specialtycontroller.js'
router.post('/postspecialty',postSpecialty);
router.get('/getspecialty',getSpecialty);
export default router;