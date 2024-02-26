const express = require("express")
const  app = express()

let  PORT = 5000


const sendMail = require("./controlear/sendMail")
app.get('/',(req,res)=>{
    res.send("i am server")
})


app.get('/email',sendMail)

const start = async ()=>{
    try {
        app.listen(PORT,()=>{
            console.log(`i am live port ${PORT}`)
        })
    } catch (error) {
        
    }
}

start()