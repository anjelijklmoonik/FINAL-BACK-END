const sellerRepository = require ('./seller.repository')

const getAllSeller = async () => {
    return await sellerRepository.getAllSeller()
}

const postSeller = async (name, address, phoneNumber) => {
    if (!name || !address || !phoneNumber) {
        throw new Error ('Data tidak lengkap')
    }
    return await sellerRepository.postSeller(name, address, phoneNumber)
}

const updateSellerByID = async (id, name, address, phoneNumber) => {
    if (!name || !address || !phoneNumber) {
        throw new Error('Data tidak lengkap');
    }
    return await sellerRepository.updateSellerByID(id, name, address, phoneNumber);
  };

  const deleteSellerByID = async (id) => {
    return await sellerRepository.deleteSellerByID(id);
};

const getByName = async (name) => {
    return await sellerRepository.getByName(name)
}

module.exports = {
    getAllSeller,
    postSeller,
    updateSellerByID,
    deleteSellerByID,
    getByName,
}