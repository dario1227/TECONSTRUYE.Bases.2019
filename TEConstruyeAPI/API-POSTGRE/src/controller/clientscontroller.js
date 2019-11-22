import Client from '../models/clients'
export async function postClient(req,res){
    const{name,phone,identification,username}=req.body;
    try{
        let newClient=await Client.create({
            name,
            phone, 
            identification,
            username
        },{
            fields:['name','phone','identification','username']
        });
        if(postClient){
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
export async function getClient(rep,res){
   const clients=await Client.findAll();
   res.json({
       data : clients
   });
}


