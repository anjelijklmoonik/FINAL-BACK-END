const postinganRepository = require ('./userPost.repository')

const getAllPostingan = async () => {
    return await postinganRepository.getAllPostingan()
}

const postPostingan = async (id, name, photo, caption, location, phoneNumber, status) => {
    if (!id || !name || !photo || !caption || !location || !phoneNumber || !status) {
        throw new Error ('Name and Adress tidak diisi')
    }
    return await postinganRepository.postPostingan(id, name, photo, caption, location, phoneNumber, status)
}

const getPostByID = async (id) => {
    return await postinganRepository.getPostByID(id)
}

module.exports = {
    getAllPostingan,
    postPostingan,
    getPostByID,
}