const prisma = require ('../db');

const getAllSeller = async () => {
    return await prisma.seller.findMany();
}

const postSeller = async (name, address, phoneNumber) => {
    return await prisma.seller.create({
        data: {
          name,
          address,
          phoneNumber,
        },
      });
}

const getByID = async (id) => {
    return await prisma.seller.findUnique({
        where: {
          id
        },
      });
}

module.exports = {
    getAllSeller,
    postSeller,
    getByID,
    // updateStudent,
    // deleteStudent
}