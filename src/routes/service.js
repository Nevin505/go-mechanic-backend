const express=require("express");


const router=express.Router();

const  serviceController=require('../controllers/service')


router.get('/services',serviceController.getService);

module.exports=router