const prisma = require('../db');

const getAllPostingan = async () => {
    return await prisma.userPost.findMany();
}

const postPostingan = async (name, caption, location, phoneNumber, status) => {
    return await prisma.userPost.create({
        data: {
          name,
          caption,
          location,
          phoneNumber,
          status,
        },
    });
}

const getPostByID = async (id) => {
    return await prisma.userPost.findUnique({
        where: {
          id
        },
    });
}

const updatePost = async (id, data) => {
    return await prisma.userPost.update({
        where: {
          id
        },
        data,
    });
}

const deletePost = async (id) => {
    return await prisma.userPost.delete({
        where: {
          id
        },
    });
}

module.exports = {
    getAllPostingan,
    postPostingan,
    getPostByID,
    updatePost,
    deletePost,
}
