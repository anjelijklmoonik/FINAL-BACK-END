const buyerService = require ('./buyer.service')

const getAllBuyer = async (req, res) => {
    try {
        const data = await buyerService.getAllBuyer ()
        res.status(200).json({
            status: 'success',
            data,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server Error')
    }
};

const postBuyer = async (req, res) => {
    const {name, address, phoneNumber} = req.body;
    try {
        const data = await buyerService.postBuyer(name, address, phoneNumber)
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
        const data = await buyerService.getByID (id)
        res.status(200).json({
            status: 'success',
            data,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server Error')
    }
};

const getByName = async (req, res) => {
    const {name} = req.params;
    try {
        const data = await buyerService.getByName (name)
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
    getAllBuyer,
    postBuyer,
    getByID,
    getByName,
}