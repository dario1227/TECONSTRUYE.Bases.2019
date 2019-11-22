import {Router} from 'express';
const router =Router();
import {postStage, getStages} from '../controller/stagecontroller.js'
router.post('/poststage',postStage);
router.get('/getstage',getStages);
export default router;