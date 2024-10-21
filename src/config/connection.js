const mongoose = require("mongoose")

const connection = () => {
    

mongoose.connect(process.env.MONGO_URL1)
.then(() => {
    console.log("MongoDB Connected...");
})


.catch((err)=> {
    console.log("Connection Error: (err)");
})

}
module.exports = connection