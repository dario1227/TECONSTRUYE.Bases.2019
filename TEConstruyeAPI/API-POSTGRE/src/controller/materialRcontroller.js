import materialR from '../models/materialR'
import {sequelize} from '../database/database';
export async function postmaterialR(req,res){
    const{name,quantity,stage,build}=req.body;
    try{
    await sequelize.query('SELECT GetStage(:names);SELECT GetMaterial(:namem);SELECT GetPrice(:namem);SELECT Getbuild(:namems);',{replacements: { names:stage, namem:name ,namems:build}, type:sequelize.QueryTypes.SELECT}).then(function(res){
        var results=JSON.parse(JSON.stringify(res));
        var keys = Object.keys(results);
        var result=Number(results[keys[0]].getstage);
        var result2=Number(results[keys[1]].getmaterial);
        var result3=Number(results[keys[2]].getprice);
        var result4=Number(results[keys[3]].getbuild);
        let newMaterialR=materialR.create({
            material:result2,
            name,
            price:result3,
            quantity,
            build:result4,
            buildname:build,
            total:result3*quantity,
            stage:result,
        },{
            fields:['material','name','price','quantity','build','buildName','total','stage']
        });
    }).error(function(err){
          res.json(err);
   })
        if(postmaterialR){
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
export async function getGetMaterialR(rep,res){
   const materialRs=await materialR.findAll();
   res.json({
       data : materialRs
   });
}