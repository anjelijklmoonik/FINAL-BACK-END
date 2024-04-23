const sellerRepository = require ('./seller.repository')

const getAllSeller = async () => {
    return await sellerRepository.getAllSeller()
}

const postSeller = async (name, address, phoneNumber) => {
    if (!name || !address || !phoneNumber) {
        throw new Error ('Name and Adress tidak diisi')
    }
    return await sellerRepository.postSeller(name, address, phoneNumber)
}

const getByID = async (id) => {
    return await sellerRepository.getByID(id)
}

module.exports = {
    getAllSeller,
    postSeller,
    getByID,
}