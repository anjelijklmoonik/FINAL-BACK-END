const buyerRepository = require ('./buyer.repository')

const getAllBuyer = async () => {
    return await buyerRepository.getAllBuyer()
}

const postBuyer = async (name, address, phoneNumber) => {
    if (!name || !address || !phoneNumber) {
        throw new Error ('Name and Adress tidak diisi')
    }
    return await buyerRepository.postBuyer(name, address, phoneNumber)
}

const getByID = async (id) => {
    return await buyerRepository.getByID(id)
}

const getByName = async (name) => {
    return await buyerRepository.getByName(name)
}

module.exports = {
    getAllBuyer,
    postBuyer,
    getByID,
    getByName,
}