const prisma = require ('../db');

const getAllBuyer = async () => {
    return await prisma.buyer.findMany();
}

const postBuyer = async (name, address, phoneNumber) => {
    return await prisma.buyer.create({
        data: {
          name,
          address,
          phoneNumber,
        },
      });
}

const getByID = async (id) => {
    return await prisma.buyer.findUnique({
        where: {
          id
        },
      });
}

const getByName = async (name) => {
    return await prisma.buyer.findMany({
        where: {
          name: name
        },
      });
}

module.exports = {
    getAllBuyer,
    postBuyer,
    getByID,
    getByName,
}