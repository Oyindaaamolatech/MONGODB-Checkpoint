const mongoose = require('mongoose')


const  connected = async () => {
    try{
        mongoose.set('strictQuery', false)
       const conn = await mongoose.connect(`mongodb+srv://babatundeoyindamola711:damola@cluster0.a9z7gig.mongodb.net/cluster0?retryWrites=true&w=majority`)
       console.log(`mongoDB connected at : ${conn.connection.host}`)

    }catch(error){
        console.log({error: error.message})
        process.exit(1)
    }
   
}
module.exports = connected