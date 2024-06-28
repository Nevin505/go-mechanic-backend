const mongodb=require("mongoose");

module.exports=mongodb.connect("mongodb+srv://nevinzachariahjohn:nevin1234@cluster0.rq7c7tn.mongodb.net/vehicle_mangement_system?retryWrites=true&w=majority&appName=Cluster0'").then(result=>{
    console.log("Database Coonected")
}).catch(error=>{
    console.log("Some Error Occurred");
})

