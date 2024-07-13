const mongoose = require("mongoose");
// if(process.env.NODE_ENV !== "production"){
//     require("dotenv").config({ path: "backend/config/config.env" })
// }
function connectDB(){
    mongoose.set("strictQuery", false); 
  
    mongoose   
        .connect(process.env.DB_LINK) 
        .then((data) => {
            console.log("Database Connectd:");
        })
        .catch(function (err) {
            console.log("error", err);
        })
}

module.exports = connectDB