const express = require('express');
const path = require('path');
const app = express();
const port = 3000; //PORT
const multer = require('multer');
const fileController = require('./controller/api/fileController');


// Add headers before the routes are defined
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', `*`);

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


// app.set("view engine" , "ejs");
// app.set("views" , path.resolve("./views"));


// Middleware
// app.use(express.json());
app.use(express.urlencoded({extended: false}));

// app.get('/', (req, res) => {
//   // console.log("homepage")
//   // return res.render("")
// });


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({storage});

app.post('/upload', upload.single('fileName') , async(req, res) => {
  console.log("here inside upload")
  const file = await fileController.createFile(req.file);
  res.redirect('/files');
  res.status(201).json("OK");
});

app.get('/files', async (req, res) => {
  
  const result = await fileController.getAllFiles();
  AllFiles = [];
  if(result.length > 0) {
    for(let i = 0 ; i < result.length ; i++) {
      AllFiles.push(result[i].dataValues);
    }
  }
  // console.log(AllFiles , "all files");
  return res.status(200).json(AllFiles);
  
});

app.get('/download/:id', async (req, res) => {
  console.log("inside download")
  const file = await fileController.getFileById(req.params.id);
  return res.status(200).json(file);
});

app.delete('/delete/:id', async (req, res) => {
  console.log(req.body , "inside delete");
  console.log(req.params , "id");
  const file = await fileController.deleteFileById(req.params.id);
  return res.status(200).json(file);
});

// app.update('/files/id', (req, res) => {

//   return res.status(200).json("Okay");
  
// });

// app.update('/files/id', (req, res) => {

//   return res.status(200).json("Okay");
  
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
