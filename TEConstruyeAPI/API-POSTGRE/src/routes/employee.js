import {Router} from 'express';
const router =Router();
import {getEmployee,postEmployee,getEmployeeP} from '../controller/employeecontroller'
router.post('/postemployee',postEmployee);
router.get('/getemployee',getEmployee);
router.get('/getemployeeP',getEmployeeP);
export default router;