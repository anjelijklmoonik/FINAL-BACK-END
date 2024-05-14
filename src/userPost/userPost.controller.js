const postinganService = require('./userPost.service');

const getAllPostingan = async (req, res) => {
    try {
        const data = await postinganService.getAllPostingan();
        res.status(200).json({
            status: 'success',
            data,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
};

const postPostingan = async (req, res) => {
    const { name, caption, location, phoneNumber, status } = req.body;
    try {
        const data = await postinganService.postPostingan(name, caption, location, phoneNumber, status);
        res.status(200).json({
            status: 'success',
            data,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
};

const getPostByID = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await postinganService.getPostByID(id);
        res.status(200).json({
            status: 'success',
            data,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
};

const updatePost = async (req, res) => {
    const { id } = req.params;
    const postData = req.body;
    try {
        const data = await postinganService.updatePost(id, postData);
        res.status(200).json({
            status: 'success',
            data,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
};

const deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        await postinganService.deletePost(id);
        res.status(200).json({
            status: 'success',
            message: 'Postingan berhasil dihapus',
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getAllPostingan,
    postPostingan,
    getPostByID,
    updatePost,
    deletePost,
}
