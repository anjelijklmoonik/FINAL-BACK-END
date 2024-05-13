const prisma = require ('../db');

const getAllCategories = async () => {
    return await prisma.categories.findMany();
}

const postCategories = async (name) => {
    return await prisma.categories.create({
        data: {
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

const getByName = async (name) => {
  return await prisma.categories.findMany({
      where: {
        name: name
      },
    });
}

module.exports = {
  getAllCategories,
  postCategories,
  getByID,
  getByName,
  // updateStudent,
  // deleteStudent
}