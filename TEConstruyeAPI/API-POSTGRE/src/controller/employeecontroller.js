import Employee from '../models/employee'
import {sequelize} from '../database/database';
export async function postEmployee(req,res){
    const{name,identification,phone,hourprice,hours,project}=req.body;
    try{
    await sequelize.query('SELECT GetProject(:names);',{replacements: { names:project }, type:sequelize.QueryTypes.SELECT}).then(function(res){
        var result=JSON.parse(JSON.stringify(res));
        var keys = Object.keys(result);
        result=Number(result[keys[0]].getproject);
        let newEmployee=Employee.create({
            name,
            identification,
            phone,
            hourprice,
            hours,
            projectid:result,
            project
        },{
            fields:['name', 'identification','phone','hourprice','hours', 'projectid','project']
        });
    }).error(function(err){
          res.json(err);
   })
        if(postEmployee){
            res.send('SE HIZO LA TRANSACCION');
        }
    }catch(e){
        console.log(e);
        res.status(500).json({
            message:'OCURRIO UN ERROR',
            data:{}
        });
    }
};
export async function getEmployee(rep,res){
   const employees=await Employee.findAll();
   res.json({
       data : employees
   });
}

export async function getEmployeeP(rep,res){
    const {project}=rep.body
    const employees=await Employee.findAll({
        where:{
            project:project
        }
    });
    res.json({
        data : employees
    });
 }