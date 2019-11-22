import Location from '../models/location'
import Sequelize from 'sequelize';
export async function postLocation(req,res){
    const{province,district,canton}=req.body;
    try{
        let newlocation=await Location.create({
            province,
            district,
            canton
        },{
            fields:['province','district','canton']
        });
        if(postLocation){
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
export async function getlocation(rep,res){
   const locations=await Location.findAll();
   res.json({
       data : locations
   });
}
export async function getProvince(rep,res){
    const locations=await Location.findAll({
        attributes:[[Sequelize.fn('DISTINCT', Sequelize.col('province')) ,'province']],
    });
    res.json({
        data : locations
    });
 }
 export async function getDistrict(rep,res){
    const locations=await Location.findAll({
        attributes:[[Sequelize.fn('DISTINCT', Sequelize.col('district')) ,'district']],
    });
    res.json({
        data : locations
    });
 }
 export async function getCanton(rep,res){
    const locations=await Location.findAll({
        attributes:[[Sequelize.fn('DISTINCT', Sequelize.col('canton')) ,'canton']],
    });
    res.json({
        data : locations
    });
 }