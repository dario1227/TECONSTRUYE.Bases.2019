import {Router} from 'express';
const router =Router();
import {getEngineer,postEngineer} from '../controller/engineercontroller'
router.post('/postengineer',postEngineer);
router.get('/getengineer',getEngineer);
export default router;