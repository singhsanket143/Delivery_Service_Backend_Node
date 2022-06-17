const crud = require('../services/crud.services');
const {Courier_Delivery} = require('../models/index');

const serverError = {
    message: 'Something went wrong',
    success: false,
    data: {}
}

const createDelivery = async (req, res) => {
    const response = await crud.create(Courier_Delivery, req.body);
    if(!response) {
        return res.status(500).json(serverError);
    }
    return res.status(200).json({
        message: 'Successfully created an delivery',
        success: true,
        data: response
    })
}

module.exports = {
    createDelivery
}