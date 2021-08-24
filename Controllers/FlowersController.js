const { flowersModel } = require('../Models/FlowersModel');
const axios = require('axios')

const getData = async (req, res) => {

    axios.get('https://flowers-api-13.herokuapp.com/getFlowers').then(axiosRes => {
        res.send(axiosRes.data.flowerslist);
    }).catch(error => res.send(error.message))
}

const getUserData = async (req, res) => {
    flowersModel.find({}, (error, data) => {
        if (error) {
            res.send(error.message)
        } else {
            res.send(data)
        }
    });

}
const createFav = async (req, res) => {
    const {
        email,
        name,
        photo,
        instructions
    }=req.body;
    flowersModel.find({email:email},(error,data)=>{
        if(error){

            res.send(error.message)
        }else{
            const newFlower=new flowersModel({
                email,
                name,
                photo,
                instructions
            });
            newFlower.save();
            res.send(newFlower);
        }
    })
}

const getFav= async(req,res)=>{
    flowersModel.find({},(error,data)=>{
        if(error){
            res.send(error.message)
        }else{
            res.send(data)
        }
    })
}

const deleteFav=async(req,res)=>{
    const id =req.params.id;
    flowersModel.deleteOne({_id:id},(error,data)=>{
        if(error){
            res.send(error.message)
        }else{
            res.send(data)
        }
    })
}

const updateFav=async(req,res)=>{
    const id=req.params.id;
    const{
        email,
        name,
        photo,
        instructions
    }=req.body;
    flowersModel.findByIdAndUpdate({_id:id},{
        email,
        name,
        photo,
        instructions
    },{new:true},(error,data)=>{
        if(error){
            res.send(error.message)
        }else{
            res.send(data)
        }
    })

}
module.exports = { getData, getUserData, createFav,getFav,deleteFav,updateFav}