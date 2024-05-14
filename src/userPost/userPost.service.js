const postinganRepository = require('./userPost.repository');

const getAllPostingan = async () => {
    return await postinganRepository.getAllPostingan();
}

const postPostingan = async (name, caption, location, phoneNumber, status) => {
    if (!name || !caption || !location || !phoneNumber || !status) {
        throw new Error('Data tidak lengkap');
    }
    return await postinganRepository.postPostingan(name, caption, location, phoneNumber, status);
}

const getPostByID = async (id) => {
    return await postinganRepository.getPostByID(id);
}

const updatePost = async (id, data) => {
    return await postinganRepository.updatePost(id, data);
}

const deletePost = async (id) => {
    return await postinganRepository.deletePost(id);
}

module.exports = {
    getAllPostingan,
    postPostingan,
    getPostByID,
    updatePost,
    deletePost,
}
