const postinganService = require ('./userPost.service')

const getAllPostingan = async (req, res) => {
    try {
        const data = await postinganService.getAllPostingan ()
        res.status(200).json({
            status: 'success',
            data,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server Error')
    }
};

const postPostingan = async (req, res) => {
    const {name, caption, location, phoneNumber, status} = req.body;
    try {
        const data = await postinganService.postPostingan (name, caption, location, phoneNumber, status)
        res.status(200).json({
            status: 'success',
            data,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server Error')
    }
};

const getPostByID = async (req, res) => {
    const {id} = req.params;
    try {
        const data = await postinganService.getPostByID (id)
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
    getAllPostingan,
    postPostingan,
    getPostByID,
}