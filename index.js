const express = require('express')
const app = express()
const path = require('path')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const port = 3000

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'upload/')
//     },
//     filename: function (req, file, cb) {
//       cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
//     }
//   })
  
//   var upload = multer({ storage: storage });
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"template/index.html"))
})

app.post('/upload', upload.single('file'), (req, res) => {
    console.log(req.files)
    res.redirect(`http://localhost:3000/upload/${req.file}.jpg`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})