const express = require("express")
const cors = require("cors")
const { createData } = require("./types")
const { data } = require("./db")

const app = express()
app.use(express.json())
app.use(cors())

app.get('/data', async (res, req)=>{
    const data = await data.find({})
    console.log('data: ', data)
    res.json({
        data
    })
})

app.post('createData', async (req, res)=>{
    const createPayLoad = req.body;
    const parsedPayLoad = createData.safeParse(createPayLoad);
    if(!parsedPayLoad.success){
        res.status(411).json({
            msg: "Wrong inputs"
        })
        return
    }

    await data.create({
        device_brand: createPayLoad.device_brand,
        model: createPayLoad.model,
        processor: createPayLoad.processor,
        sdk_int: createPayLoad.sdk_int,
        username: createPayLoad.username,
        vehicle_brand: createPayLoad.vehicle_brand,
        vehicle_cc: createPayLoad.vehicle_cc,
        vehicle_type: createPayLoad.vehicle_type,
        zone: createPayLoad.zone
    })
    res.json({
        msg: 'data created'
    })
})