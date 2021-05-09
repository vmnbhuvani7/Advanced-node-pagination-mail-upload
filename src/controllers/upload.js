
const upload = async (req, res) => {
    
    //single file upload
    res.json(req.file)

    //multiple file upload
    // res.json(req.files)
}

module.exports = { upload }