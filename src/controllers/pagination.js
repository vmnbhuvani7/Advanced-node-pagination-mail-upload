const { Blog } = require('../models')

const pagination = async (req, res) => {
    const { page, perPage } = req.query;

    const options = {
        page: parseInt(page, 10) || 1,
        limit: parseInt(perPage, 10) || 2,
        offset: 1 // skip record
    }
    const data = await Blog.paginate({}, options)
    res.json(data)
}

module.exports = { pagination }