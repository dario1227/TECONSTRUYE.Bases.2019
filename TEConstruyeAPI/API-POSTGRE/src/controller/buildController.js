import build from '../models/build'
import {sequelize} from '../database/database';
export async function postbuild(req,res){
    const{name,pro,dis,can,rooms,bathrooms,floor,groundsize,buildsize,owner,proyectname}=req.body;
    try{
    await sequelize.query('SELECT Getlocation(:can,:dis,:prov);SELECT Getproject(:project)',{replacements: { prov:pro, can:can ,dis:dis, project:proyectname}, type:sequelize.QueryTypes.SELECT}).then(function(res){
        var results=JSON.parse(JSON.stringify(res));
        var keys = Object.keys(results);
        var result=Number(results[keys[0]].getlocation);
        var result2=Number(results[keys[1]].getproject);
        let newbuild=build.create({
            name,
            location:result,
            rooms,
            bathrooms,
            floor,
            groundsize,
            buildsize,
            owner,
            proyect:result2,
            proyectname:proyectname

        },{
            fields:['name','location',
                'rooms',
                'bathrooms',
                'floor',
                'groundsize',
                'buildsize',
                'owner',
                'proyect',
                'proyectname']
        });
    }).error(function(err){
          res.json(err);
   })
        if(postbuild){
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
export async function getbuild(rep,res){
   const builds=await build.findAll();
   res.json({
       data : builds
   });
}