const categoriesRepository = require ('./categories.repository')

const getAllCategories = async () => {
    return await categoriesRepository.getAllCategories()
}

const postCategories = async (name) => {
    if (!name) {
        throw new Error ('Name tidak diisi')
    }
    return await categoriesRepository.postCategories(name)
}

const getByID = async (id) => {
    return await categoriesRepository.getByID(id)
}

module.exports = {
    getAllCategories,
    postCategories,
    getByID,
}