const postinganRepository = require ('./userPost.repository')

const getAllPostingan = async () => {
    return await postinganRepository.getAllPostingan()
}

const postPostingan = async (name, photo, caption, location, phoneNumber, status) => {
    if (!name || !photo || !caption || !location || !phoneNumber || !status) {
        throw new Error ('Name and Adress tidak diisi')
    }
    return await postinganRepository.postPostingan(name, photo, caption, location, phoneNumber, status)
}

const getPostByID = async (id) => {
    return await postinganRepository.getPostByID(id)
}

module.exports = {
    getAllPostingan,
    postPostingan,
    getPostByID,
}