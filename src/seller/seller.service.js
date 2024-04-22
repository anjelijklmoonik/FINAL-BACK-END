const sellerRepository = require ('./seller.repository')

const getAllSeller = async () => {
    return await sellerRepository.getAllSeller()
}

const postSeller = async (name, address) => {
    if (!name || !address) {
        throw new Error ('Name and Adress tidak diisi')
    }
    return await sellerRepository.postSeller(name, address)
}

module.exports = {
    getAllSeller,
    postSeller,
}