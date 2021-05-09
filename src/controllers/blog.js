const { Blog } = require('../models');

const getBlog = async (req, res) => {
    await Blog.findById(req.params.blogId)
        .populate({ path: 'author' })
        .then((result) => {
            res.json(result)
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}

const getAllBlog = async (req, res) => {
    await Blog.find({ author: req.user.userId })
        .then((result) => {
            res.json(result)
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}

const createBlog = async (req, res) => {
    req.body.author = req.user.userId
    await Blog.create(req.body)
        .then((result) => {
            res.json(result)
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}

const updateBlog = async (req, res) => {
    await Blog.findByIdAndUpdate(req.params.blogId, req.body, { new: true })
        .then((result) => {
            res.json(result)
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}

const deleteBlog = async (req, res) => {
    await Blog.findByIdAndDelete({ _id: req.params.blogId })
        .then((result) => {
            res.json(result)
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}

module.exports = {
    getBlog,
    createBlog,
    getAllBlog,
    deleteBlog,
    updateBlog
}