import Stage from '../models/stage'
import Sequelize from 'sequelize';
export async function postStage(req,res){
    const{description}=req.body;
    try{
        let newStage=await Stage.create({
            description
        },{
            fields:['description']
        });
        if(postStage){
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
export async function getStages(rep,res){
   const stages=await Stage.findAll({
    attributes:[[Sequelize.fn('DISTINCT', Sequelize.col('description')) ,'description']],
});
   res.json({
       data : stages
   });
}