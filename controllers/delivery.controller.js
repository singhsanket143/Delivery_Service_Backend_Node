const crud = require('../services/crud.services');
const {Courier_Delivery, Item} = require('../models/index');

const serverError = {
    message: 'Something went wrong',
    success: false,
    data: {}
}
`
{
    "senderId": 1,
    "receiverId": 2,
    "items": [
        {
            "name": "TV", "description": "new tv"
        }, 
        {
            "name": "pencil", "description": "new pencil"
        }
    ]
}
`
const createDelivery = async (req, res) => {
    const response = await crud.create(Courier_Delivery, req.body);
    // [{name: 'abc', description: 'abcd'}, {name: 'sdkbkfv'}]
    console.log(typeof req.body.items);
    const items = req.body.items.map(item => Object.assign(item, {deliveryId: response.id}));
    await crud.bulkCreate(Item, items);
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