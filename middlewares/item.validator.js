const createItemValidator = (req, res, next) => {
    if(!req.body.name) {
        return res.status(400).json({
            message: 'Invalid argument',
            data: {},
            success: false
        })
    }
    next();
}

module.exports = {
    createItemValidator
}