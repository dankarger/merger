const multer = require('multer');

const errorMiddleware = (req, res, next) => {
    throw new Error('From my middleware')
}


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./work");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "--" + file.originalname);
    },
    limits: function (req, file, cb) {
        cb({fileSize:  50000000, files:1})
    },

})

const fileFilter = (req, file, cb) => {
    console.log("Valid????:",(file.mimetype).includes(/\.(jpg|jpeg|png)$/))
    try {
        if ((file.mimetype).includes(/\.(jpg|jpeg|png)$/)) {
            cb(null, true);
        }else{
            throw new Error(`Not valid image`)
        }

    } catch (error) {
        cb(new Error('File need to be a image type'))
    }
}


let upload2 = multer({storage:storage, fileFilter: fileFilter})


const upload = multer({
    // dest: 'images', // to save on local directory
    limits: {fileSize: 50000000},
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please upload an image'))
        }
        cb(undefined, true)
        // cb(new Error('File need to be a PDF'))
        // cb(undefined,true)
        // cb(undefined,false)
    }
})

module.exports = {upload, upload2: upload2.single('image')}
