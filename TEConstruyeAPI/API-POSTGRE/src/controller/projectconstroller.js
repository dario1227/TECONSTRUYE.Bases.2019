import Project from '../models/project'
import {sequelize} from '../database/database';
export async function postProject(req,res){
    const{name,hours,stage,begin,ends}=req.body;
    try{
    await sequelize.query('SELECT GetStage(:names);',{replacements: { names:stage }, type:sequelize.QueryTypes.SELECT}).then(function(res){
        var result=JSON.parse(JSON.stringify(res));
        var keys = Object.keys(result);
        result=Number(result[keys[0]].getstage);
        let newProject=Project.create({
            name,
            hours,
            stageid:result,
            stage,
            begin,
            ends
        },{
            fields:['name','hours','stageid','stage','begin','ends']
        });
    }).error(function(err){
          res.json(err);
   })
        if(postProject){
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
export async function getProject(rep,res){
   const projects=await Project.findAll();
   res.json({
       data : projects
   });
}

export async function getEspecificP(rep,res){
    const{name}=rep.body;
    const projects=await Project.findAll({
        where:{
            name:name
        }
    });
    res.json({
        data : projects
    });
 }
 export async function getjustProject(rep,res){
    const projects=await Project.findAll({
        attributes:[[Sequelize.fn('DISTINCT', Sequelize.col('name')) ,'name']],
    });
    res.json({
        data : projects
    });
 }