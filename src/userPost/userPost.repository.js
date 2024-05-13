const prisma = require ('../db');

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

module.exports = {
  getAllPostingan,
  postPostingan,
  getPostByID,
    // updateStudent,
    // deleteStudent
}