const categoriesRepository = require ('./categories.repository')

const getAllCategories = async () => {
    return await categoriesRepository.getAllCategories()
}

const postCategories = async (name, address, phoneNumber) => {
    if (!name || !address || !phoneNumber) {
        throw new Error ('Name and Adress tidak diisi')
    }
    return await categoriesRepository.postCategories(name, address, phoneNumber)
}

const getByID = async (id) => {
    return await categoriesRepository.getByID(id)
}

module.exports = {
    getAllCategories,
    postCategories,
    getByID,
}