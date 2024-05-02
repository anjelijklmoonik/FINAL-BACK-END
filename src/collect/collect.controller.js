const collectService = require ('./collect.service')

const getAllCollect = async (req, res) => {
    try {
        const data = await collectService.getAllCollect ()
        res.status(200).json({
            status: 'success',
            data,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server Error')
    }
};

const postCollect = async (req, res) => {
    const {id_user, id_posting, status} = req.body;
    try {
        const data = await collectService.postCollect(id_user, id_posting, status)
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
        const data = await collectService.getByID (id)
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
}