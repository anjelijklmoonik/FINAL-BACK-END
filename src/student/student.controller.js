const studentService = require ('./student.service')

const getAllStudents = async (req, res) => {
    try {
        const data = await studentService.getAllStudents ()
        res.status(200).json({
            status: 'success',
            data,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server Error')
    }
};

const postStudent = async (req, res) => {
    const {name, address} = req.body;
    try {
        const data = await studentService.postStudent (name, address)
        res.status(200).json({
            status: 'success',
            data,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server Error')
    }
};

const getByID = async (req, res) => {
    const {id} = req.params;
    try {
        const data = await studentService.getByID (id)
        res.status(200).json({
            status: 'success',
            data,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server Error')
    }
};

const updateStudent = async (req, res) => {
    const { id } = req.params;
    const { name, address } = req.body;
    try {
        const data = await studentService.updateStudent (id, name, address)
        res.status(200).json({
            status: 'success',
            data,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server Error')
    }
};

const deleteStudent = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await studentService.deleteStudent (id)
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
    getAllStudents,
    postStudent,
    getByID,
    updateStudent,
    deleteStudent
}