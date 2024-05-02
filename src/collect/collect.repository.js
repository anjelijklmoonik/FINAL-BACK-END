const prisma = require ('../db');

const getAllCollect = async () => {
    return await prisma.collect.findMany();
}

const postCollect = async (id_user, id_posting, status) => {
    return await prisma.collect.create({
        data: {
          id_user,
          id_posting,
          status,
        },
      });
}

const getByID = async (id) => {
    return await prisma.collect.findUnique({
        where: {
          id
        },
      });
}



module.exports = {
    getAllCollect,
    postCollect,
    getByID,
}