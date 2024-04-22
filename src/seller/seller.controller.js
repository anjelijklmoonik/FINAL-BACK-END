const sellerService = require ('./seller.service')

const getAllSeller = async (req, res) => {
    try {
        const data = await sellerService.getAllSeller ()
        res.status(200).json({
            status: 'success',
            data,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server Error')
    }
};

const postSeller = async (req, res) => {
    const {name, address} = req.body;
    try {
        const data = await sellerService.postSeller (name, address)
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
    getAllSeller,
    postSeller,
}