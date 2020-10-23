const express = require('express')
const getDroneData = require('./helpers/getDroneData')
const getError = require('./helpers/getError')

const app = express()

app.listen(3000)

//  MIDDLEWARE
app.use('/',(req,res)=>{
    const error = getError()
    if(error){
        console.log("error",error)
        res.send(error, 404)
    }else{
        const droneData = getDroneData()
        res.send(droneData)
    }

})

app.get('/', (req,res)=>{res.send("drone data!")})