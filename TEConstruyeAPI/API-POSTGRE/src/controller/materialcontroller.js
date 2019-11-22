import Material from '../models/material'
import Sequelize from 'sequelize';
export async function postMaterial(req,res){
    const{name,unitprice}=req.body;
    try{
        let newMaterial=await Material.create({
            name,
            unitprice
        },{
            fields:['name','unitprice']
        });
        if(postMaterial){
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
export async function getMaterial(rep,res){
   const materials=await Material.findAll({
    attributes:[[Sequelize.fn('DISTINCT', Sequelize.col('name')) ,'name']],
});
   res.json({
       data : materials
   });
}

export async function getprice(rep,res){
    const {name}=rep.params;
    const materials=await Material.findOne({
        where: {name},
        attributes:[[Sequelize.fn('DISTINCT', Sequelize.col('unitprice')) ,'unitprice']],
 });
    res.json({
        data : materials
    });
 }