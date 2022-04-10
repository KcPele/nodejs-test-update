import express from "express";
import "dotenv/config"
 const app = express()
 const { connectionToDb, getDb} = require("./db")
 const PORT = process.env.PORT || 1000

 let db
connectionToDb((error) => {
    //checking if there are no errors
    if(!error){
        app.listen(PORT, () => {
            console.log("listerning on port 3000")
        })
        db = getDb()
    }

})

app.get("/books", (req, res) => {
    res.json({msg: "welcome to the api"})
})




