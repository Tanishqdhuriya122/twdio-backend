// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connecDB from "./db/index.js";
import  app from "./app.js";
dotenv.config({
    path: './env'
})



connecDB( )
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running ar POrt : ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("Monogdb connection failed!!! ", error)
})

// first approach
// import express from "express"
// const app  =express()
// ( async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error",(error) => {
//             console.log("ERROR :",error);
//             throw error
//         })

//         app.listen(process.env.PORT,() =>{
//             console.log(`App is listening on port ${process.env.PORT}`);
//         } )

//     }catch(error){
//         console.log("error" , error)
//         throw err
//     }
// })()
 