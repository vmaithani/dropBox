const express = require('express');
const path = require('path');
const app = express();
const port = 3000; //PORT
const multer = require('multer');

app.set("view engine" , "ejs");
app.set("views" , path.resolve("./views"));


// Middleware
// app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  console.log("get all files")
  return res.render("homepage")
  
});


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({storage});

app.post('/upload', upload.single('fileName') ,  (req, res) => {
  console.log(req.body , "upload ke andar");
  console.log(req.file , "upload ke andar");

  // const { name, size } = req.body;
  // const file = fileController.createFile(name, size);
  // console.log(file , "filessss")
  return res.redirect('/');
  res.status(201).json("OK");
});





// Routes
// const fileRoutes = require('./routes/fileRoutes');

// app.use('/', fileRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
