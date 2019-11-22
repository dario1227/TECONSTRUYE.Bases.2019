import Specialty from '../models/specialty'
import Sequelize from 'sequelize';
export async function postSpecialty(req,res){
    const{description}=req.body;
    try{
        let newSpecialty=await Specialty.create({
            description
        },{
            fields:['description']
        });
        if(postSpecialty){
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
export async function getSpecialty(rep,res){
   const specialtys=await Specialty.findAll({
    attributes:[[Sequelize.fn('DISTINCT', Sequelize.col('description')) ,'description']],
});
   res.json({
       data : specialtys
   });
}