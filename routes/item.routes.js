const itemController = require('../controllers/item.controller');
const authValidator = require('../middlewares/auth.validator');
const itemValidator = require('../middlewares/item.validator');

const routes = (app) => {
    app.post(
        '/relevel/api/v1/item',
        authValidator.isAuthenticated,
        itemValidator.createItemValidator,
        itemController.createItem
    )
    app.get(
        '/relevel/api/v1/item',
        authValidator.isAuthenticated,
        itemController.getAllItems
    )
    app.get(
        '/relevel/api/v1/item/:id',
        authValidator.isAuthenticated,
        itemController.getItem
    )
    app.delete(
        '/relevel/api/v1/item/:id',
        authValidator.isAuthenticated,
        itemController.deleteItem
    )
    app.patch(
        '/relevel/api/v1/item/:id',
        authValidator.isAuthenticated,
        itemController.updateItem
    )
}

module.exports = routes;