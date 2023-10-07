
const helper = require('./helper');

// Example in-memory database
// const fileDatabase = [];

// Create a new file
const createFile = async function (req)  {
    console.log(req ,  "create file")
    const fileData = {
        uniquefilename: req.filename,
        originalname: req.originalname,
        url: req.destination,
        datetime: Date.now(),
        filesize: req.size,
        filetype: req.mimetype
    }

    const result =await helper.insertFileData(fileData);
    return {code: result.code , message:"message"};
};

// Get all files
const getAllFiles = async function () {
    console.log("inside get all files");
    const filesList =await helper.getAllFiles();
    // console.log(filesList , "list of files");
   return filesList;
};

//get file by id
const getFileById = async function (id) {

    const file = await helper.getFileById(id);

    return file.dataValues;
};


//update file
const updateFileById = (id) => {
    console.log(id , "id");
    return {message: "nothing to update yet"};
};


const deleteFileById = (id) => {
    console.log(id , "id");
    return {message: "nothing to delete yet"};
};



module.exports = { createFile, getAllFiles , getFileById , updateFileById , deleteFileById};

// const createFile = async function (req, res) {
//     console.log
// }

// exports.uploadFile = async function (req, res) {
//     console.log(req, "upload ke andar")
//     const { name, size } = req.body;
//     const file = fileController.createFile(name, size);
//     console.log(file , "filessss")
//     res.status(201).json(file);
// };


// exports.getFileById = async function (req, res) {
//     console.log("get particular file")
//     console.log(req.params.id);
//     //   const files = fileController.getAllFiles();
//     res.status(200).json(req.params.id);
// };


// exports.getAllFiles = async function (req, res) {
    
// };

// exports.deleteFileById = async function (req, res) {
    
// };

// exports.updateFileById = async function (req, res) {
    
// };


