
const express=require('express');
const router=express.Router();
const fileController = require('../controller/api/fileController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });



// router.get('/', (req, res) => {
//     console.log("get all files")
//     return res.render("homepage")
    
// });


// Create a new file
router.post('/upload', upload.single('fileName') ,  (req, res) => {
    console.log(req.body , "upload ke andar");
    console.log(req.file , "upload ke andar");
    // const { name, size } = req.body;
    // const file = fileController.createFile(name, size);
    // console.log(file , "filessss")
    return res.redirect('/');
    res.status(201).json("OK");
});

// Get particular file
// router.get('/:id', (req, res) => {
//     console.log("get particular file")
//     console.log(req.params.id);
//     // const file = fileController.getFileById(req.params.id);
//     res.status(200).json("hahah");
// });

//get all files
router.get('/files', (req, res) => {
    console.log("get all files")
    const files = fileController.getAllFiles();
    res.status(200).json(files);
});


router.put('/:id', (req, res) => {
    console.log("update particular file")
    console.log(req.params.id);
    const file = fileController.updateFileById(req.params.id);
    res.status(200).json(file);
});


router.delete('/:id', (req, res) => {
  console.log("delete particular file")
  console.log(req.params.id);
  const file = fileController.deleteFileById(req.params.id);
  res.status(200).json(file);
});


module.exports = router;
