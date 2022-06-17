const crud = require('../services/crud.services');
const {Item} = require('../models/index');

const serverError = {
    message: 'Something went wrong',
    success: false,
    data: {}
}


const createItem = async (req, res) => {
    const response = await crud.create(Item, req.body);
    if(!response) {
        return res.status(500).json(serverError);
    }
    return res.status(200).json({
        message: 'Successfully created an item',
        success: true,
        data: response
    })
}


const getAllItems = async (req, res) => {
    const response = await crud.getAll(Item);
    if(!response) {
        return res.status(500).json(serverError);
    }
    return res.status(200).json({
        message: 'Successfully fetched all items',
        success: true,
        data: response
    })
}


const getItem = async (req, res) => {
    const response = await crud.getAll(Item, req.params.id);
    if(!response) {
        return res.status(500).json(serverError);
    }
    return res.status(200).json({
        message: 'Successfully fetched an item',
        success: true,
        data: response
    })
}


const deleteItem = async (req, res) => {
    const response = await crud.destroy(Item, req.params.id);
    if(!response) {
        return res.status(500).json(serverError);
    }
    return res.status(200).json({
        message: 'Successfully deleted an item',
        success: true,
        data: response
    })
}


const updateItem = async (req, res) => {
    const response = await crud.update(Item, req.params.id, req.body);
    if(!response) {
        return res.status(500).json(serverError);
    }
    return res.status(200).json({
        message: 'Successfully updated an item',
        success: true,
        data: response
    })
}


module.exports = {
    createItem,
    getAllItems,
    getItem,
    deleteItem,
    updateItem
}