const multer = require('multer');
const path = require('path');

const csvFilter = (req, file, cb) => {
    if (file.mimetype.includes("csv")) {
        cb(null, true);
    } else {
        cb("Please upload only csv file.", false);
    }
};

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

//single file upload
var upload = multer({
    storage: storage,
    fileFilter: csvFilter
    // limits: { fileSize: 10 }
}).single("file");

//multiple file upload
// var upload = multer({
//     storage: storage
// }).array("file");

module.exports = upload