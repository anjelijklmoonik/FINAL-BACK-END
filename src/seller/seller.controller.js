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
    const {name, address, phoneNumber} = req.body;
    try {
        const data = await sellerService.postSeller (name, address, phoneNumber)
        res.status(200).json({
            status: 'success',
            data,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server Error')
    }
};

const updateSellerByID = async (req, res) => {
    const { id } = req.params;
    const { name, address, phoneNumber } = req.body;
    try {
        const updateSellerByID = await sellerService.updateSellerByID(id, name, address, phoneNumber);
        res.status(200).json({
            status: 'Success',
            message: 'Data berhasil diupdate',
            data: updateSellerByID,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const deleteSellerByID = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedSeller = await sellerService.deleteSellerByID(id);
        res.status(200).json({
            status: 'Success',
            message: 'Data berhasil dihapus',
            data: deletedSeller,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const getByName = async (req, res) => {
    const {name} = req.params;
    try {
        const data = await sellerService.getByName (name)
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
    updateSellerByID,
    deleteSellerByID,
    getByName,
}