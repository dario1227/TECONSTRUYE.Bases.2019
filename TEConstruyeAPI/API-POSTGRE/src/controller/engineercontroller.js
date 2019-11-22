import Engineer from '../models/engineer'
import {sequelize} from '../database/database';
export async function postEngineer(req,res){
    const{name,phone,specialtyname,identification}=req.body;
    try{
    await sequelize.query('SELECT GetSpecialty(:names);',{replacements: { names:specialtyname }, type:sequelize.QueryTypes.SELECT}).then(function(res){
        var result=JSON.parse(JSON.stringify(res));
        var keys = Object.keys(result);
        result=Number(result[keys[0]].getspecialty);
        let newEngineer=Engineer.create({
            name:name,
            phone:phone,
            specialty:result,
            identification:identification
        },{
            fields:['name','phone','specialty','identification']
        });
    }).error(function(err){
          res.json(err);
   })
        if(postEngineer){
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
export async function getEngineer(rep,res){
   const engineers=await Engineer.findAll();
   res.json({
       data : engineers
   });
}