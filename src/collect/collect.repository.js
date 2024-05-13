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

const getByName = async (req, res) => {
  const {name} = req.params;
  try {
      const data = await collectService.getByName (name)
      res.status(200).json({
          status: 'success',
          data,
      })
  } catch (error) {
      console.log(error)
      res.status(500).send('Internal Server Error')
  }
};



module.exports = {
    getAllCollect,
    postCollect,
    getByID,
    getByName,
}