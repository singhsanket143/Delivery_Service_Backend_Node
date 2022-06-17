const createDeliveryValidator = (req, res, next) => {
    if(!(req.body.senderId && req.body.receiverId)) {
        return res.status(400).json({
            message: 'Invalid argument',
            data: {},
            success: false
        })
    }
    next();
}

module.exports = {
    createDeliveryValidator
}