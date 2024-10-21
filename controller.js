const Plantdetails = require ("./model")
const mongoose = require ("mongoose") 



const createplant = async(req,res) => {
    try {
            const createplantdetails = await Plantdetails.create(req.body)
            res.json({
                data: createplantdetails,
                message: "Plant Details..."
            })

    }catch (err) {
        res.json({
            error: err
        })
    }
};




const getdetails = async(req, res) => {
    try {
        let {price} = req.query;
        let findDetails = await Plantdetails.find();
        if (!findDetails  ||  findDetails.length === 0) {
            return res.status(404).json({
                message: "Details not Found"
            })
            
        }
        res.json({
            data: findDetails
        });
    } catch (error) {
        res.json({
            Error: error
        })
    }
 };




 const deleteDetails = async (req, res) => {
    try {
        let {objectid} = req.query
        const findDetails = await Plantdetails.findOne({objectid})
        if(!findDetails) {
            return res.status(404).json({
                message: "details not found"
            })
        }

        const deletedetail = await Plantdetails.deleteOne({objectid})

        res.json({
            data: deletedetail,
            message: "data deleted succesfully"
        })
    }
    catch (error){
        res.json({
            Error: error
        })
    }

};




const editusebydetails = async (req,res) =>{
    try {
        let {objectid} = req.query;
        const updateDetails = await Plantdetails.findByIdAndUpdate(objectid,req.body,{now:true})
        if (!updateDetails) {
             res.status(404).jons({
                message:"Details Not Found"
            })
        };
        res.json({
            data:updateDetails
        })
    } catch (error) {
        res.json({
            Error: error
        })
       
    }
};


    module.exports = {
        createplant,
        getdetails,
        deleteDetails,
        editusebydetails
    };