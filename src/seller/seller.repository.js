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

const updateSellerByID = async (id, name, address, phoneNumber) => {
  return await prisma.seller.update({
      where: {
          id: parseInt(id, 10),
      },
      data: {
          name,
          address,
          phoneNumber,
      },
  });
};

const deleteSellerByID = async (id) => {
  return await prisma.seller.delete({
      where: {
          id: parseInt(id, 10),
      },
  });
};

const getByName = async (name) => {
  return await prisma.seller.findMany({
      where: {
        name: name
      },
    });
}

module.exports = {
    getAllSeller,
    postSeller,
    updateSellerByID,
    deleteSellerByID,
    getByName,
}