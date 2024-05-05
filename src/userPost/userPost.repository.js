const prisma = require ('../db');

const getAllPostingan = async () => {
    return await prisma.postingan.findMany();
}

const postPostingan = async (id, name, photo, caption, location, phoneNumber, status) => {
    return await prisma.postingan.create({
        data: {
          name,
          photo,
          caption,
          location,
          phoneNumber,
          status,
        },
      });
}

const getPostByID = async (id) => {
    return await prisma.postingan.findUnique({
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