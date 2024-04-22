const prisma = require ('../db')

const getAllStudents = async () => {
    return await prisma.students.findMany();
}

const postStudent = async (name, address) => {
    return await prisma.students.create({
        data: {
          name,
          address,
        },
      });
}

const getByID = async (id) => {
    return await prisma.students.findUnique({
        where: {
          id: parseInt(id, 10),
        },
      });
}

const updateStudent = async (name, address, id) => {
    return await prisma.students.update({
        where: {
          id: parseInt(id, 10),
        },
        data: {
          name,
          address,
        },
      });
}

const deleteStudent = async (id) => {
    return await prisma.students.delete({
        where: {
          id: parseInt(id, 10),
        },
      });
}

module.exports = {
    getAllStudents,
    postStudent,
    getByID,
    updateStudent,
    deleteStudent
}