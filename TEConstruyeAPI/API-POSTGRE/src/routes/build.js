import {Router} from 'express';
const router =Router();
import {postbuild,getbuild} from '../controller/buildController'
router.post('/postbuild',postbuild);
router.get('/getbuild',getbuild);
export default router;