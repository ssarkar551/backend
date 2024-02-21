const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://shadowFang09:JawYJDSOePKwnWV3@cluster0.x4py9o2.mongodb.net/')
const dataschema = mongoose.Schema({
    "device_brand": String,
    "model": String,
    "processor": String,
    "sdk_int": Number,
    "username": String,
    "vehicle_brand": String,
    "vehicle_cc": String,
    "vehicle_type": String,
    "zone": String
})

const data = mongoose.model('data', dataschema);

module.exports = {
    data
}