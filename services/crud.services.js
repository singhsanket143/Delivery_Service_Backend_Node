const create = async (model, data) => {
    try {
        const response = await model.create(data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const getAll = async (model) => {
    try {
        const response = await model.findAll();
        return response;
    } catch (error) {
        console.log(error);
    }
}

const getById = async (model, id) => {
    try {
        const response = await model.findByPk(id);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const destroy = async (model, id) => {
    try {
        const response = await model.findByPk(id);
        response.destroy();
        return true;
    } catch (error) {
        console.log(error);
    }
}

const update = async (model, id, data) => {
    try {
        const response = await model.findByPk(id);
        await response.update(data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    create,
    getAll,
    getById,
    destroy,
    update
}