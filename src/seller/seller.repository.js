const prisma = require ('../db');

const getAllSeller = async () => {
    return await prisma.seller.findMany();
}

const postSeller = async (name, address) => {
    return await prisma.seller.create({
        data: {
          name,
          address,
        },
      });
}

module.exports = {
    getAllSeller,
    postSeller,
    // getByID,
    // updateStudent,
    // deleteStudent
}