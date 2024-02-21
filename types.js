const zod = require("zod");

const createData = zod.object({
    device_brand: zod.string(),
    model: zod.string(),
    processor: zod.string(),
    sdk_int: zod.number(),
    username: zod.string(),
    vehicle_brand: zod.string(),
    vehicle_cc: zod.string(),
    vehicle_type: zod.string(),
    zone: zod.string(),
})

module.exports = {
    createData
}