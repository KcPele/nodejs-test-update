import "dotenv/config"
import  { MongoClient } from "mongodb"
let dbConnection;
module.exports = {
    connectToDb: (callback) => {
        MongoClient.connect(process.env.MONGO_URL)
        .then((client) => {
            dbConnection = client.db()
            return callback()
        })
        .catch(error => {
            console.log(error)
            return callback(error)
        })
    },
    getDb: () => dbConnection
}

// const connectDatabase = async () => {
//     try {
//         const connection = await mongoose.connect(process.env.MONGO_URL, {
//             useUnifiedTopology: true,
//             useNewUrlParser: true,
//         });
//         console.log("Mongo Connection")
        
//     } catch (error) {
//         console.log(`Error: ${error.message}`)
//         process.exit(1)
//     }
// }


// export default connectDatabase