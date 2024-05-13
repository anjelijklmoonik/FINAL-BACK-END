const categoriesService = require ('./categories.service')

const getAllCategories = async (req, res) => {
    try {
        const data = await categoriesService.getAllCategories ()
        res.status(200).json({
            status: 'success',
            data,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server Error')
    }
};

const postCategories = async (req, res) => {
    const {name} = req.body;
    try {
        const data = await categoriesService.postCategories (name)
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
        const data = await categoriesService.getByID (id)
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
    getAllCategories,
    postCategories,
    getByID,
}