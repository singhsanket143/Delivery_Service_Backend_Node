const deliveryController = require('../controllers/delivery.controller');
const authValidator = require('../middlewares/auth.validator');
const deliveryValidator = require('../middlewares/delivery.validator');
const routes = (app) => {
    app.post(
        '/relevel/api/v1/delivery', 
        authValidator.isAuthenticated,
        deliveryValidator.createDeliveryValidator,
        deliveryController.createDelivery
    )
}

module.exports = routes;