const db = require('../../models/db');
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' })


// Example in-memory database
const fileDatabase = [];

// Create a new file
const createFile = (name, size) => {
    console.log(name , size , "create file")

      return {message:"nothing done yet"};
};

// Get all files
const getAllFiles = () => {
    console.log("inside get all files")
   return {message:"nothing done yet"};;
};

//get file by id
const getFileById = (id) => {
    console.log(id , "id");
    return {message: "nothing to get yet"};
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


