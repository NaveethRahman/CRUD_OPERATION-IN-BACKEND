const express = require("express")
const router = express.Router()
const plantcontroller = require("./controller")



router
.route("/Plantproductdetails")
.post(plantcontroller.createplant)
.get(plantcontroller.getdetails)                    
.delete(plantcontroller.deleteDetails)                
.put(plantcontroller.editusebydetails)            


module.exports=router;