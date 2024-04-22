const studentRepository = require ('./student.repository')

const getAllStudents = async () => {
    return await studentRepository.getAllStudents()
}

const postStudent = async (name, address) => {
    if (!name || !address) {
        throw new Error ('Name and Adress tidak diisi')
    }
    return await studentRepository.postStudent(name, address)
}

const getByID = async (id) => {
    return await studentRepository.getByID(id)
}

const updateStudent = async (name, id, address) => {
    if (!name || !address) {
        throw new Error ('Name and Adress tidak diisi')
    }
    return await studentRepository.updateStudent(name, id, address)
}

const deleteStudent = async (id) => {
    return await studentRepository.deleteStudent(id)
}

module.exports = {
    getAllStudents,
    postStudent,
    getByID,
    updateStudent,
    deleteStudent
}