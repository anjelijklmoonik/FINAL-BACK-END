const prisma = require ('../db');

const getAllCategories = async () => {
    return await prisma.categories.findMany();
}

const postCategories = async (id, name) => {
    return await prisma.categories.create({
        data: {
          id,
          name,
        },
      });
}

const getByID = async (id) => {
    return await prisma.categories.findUnique({
        where: {
          id
        },
      });
}

module.exports = {
  getAllCategories,
  postCategories,
  getByID,
  // updateStudent,
  // deleteStudent
}