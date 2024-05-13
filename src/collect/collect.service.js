const collectRepository = require ('./collect.repository')

const getAllCollect = async () => {
    return await collectRepository.getAllCollect()
}

const postCollect = async (id_user, id_posting, status) => {
    if (!id_user || !id_posting || !status) {
        throw new Error ('id user and id posting tidak diisi')
    }
    return await collectRepository.postCollect(id_user, id_posting, status)
}

const getByID = async (id) => {
    return await collectRepository.getByID(id)
}

const getByName = async (id) => {
    return await collectRepository.getByName(id)
}

module.exports = {
    getAllCollect,
    postCollect,
    getByID,
    getByName,
}